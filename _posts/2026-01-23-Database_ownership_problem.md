---
layout: post
title:  "The Database Nobody Owns (And Everyone Touches)"
author: vishesh gupta
description: A brutally honest conversation between two engineers about the database ownership dilemma nobody talks about — and the elegant solution that's been hiding in plain sight all along. Performance vs. clean architecture. Pragmatism vs. best practices. Sometimes the answer isn't choosing sides — it's drawing better boundaries.
tags: SoftwareEngineering SystemDesign DatabaseArchitecture BackendEngineering TechnicalDebt
---
![Requests](/assets/images/data_ownership.png)

# The Database Nobody Owns (And Everyone Touches)

*A conversation every backend engineer has had — or should have had — at least once.*

---

## TL;DR

**The Problem:** You have two services sharing a database. One writes, one reads. Every architecture blog says this is wrong, but adding a network hop between them kills performance. Direct database access feels dirty, but it's the only practical option.

**The Real Issue:** It's not the coupling that's dangerous — it's the *invisible* coupling. Schema changes break things at runtime with no warning. `SELECT *` becomes a ticking time bomb. Your "microservices" are coupled anyway, but in the worst possible way.

**The Solution:** Stop pretending the database isn't an API. Use **database views** as explicit contracts. The write service owns tables and exposes views. The read service touches *only* views. Now you get:
- Zero network overhead
- Clear ownership boundaries  
- Safe schema evolution
- Explicit versioning when needed

**The Lesson:** Good architecture fits your team and constraints — not what worked at Google. Sometimes the right boundary isn't another service. Sometimes it's a view.

---

**Amit:**  
We need to build a system that pulls data from client environments, processes it, and serves it to the frontend. Pretty standard stuff.

**Tim:**  
Nothing is ever "pretty standard". What's the catch?

**Amit:**  
Two services.  
One service processes data and writes to the database.  
Another service reads that data and serves it to the frontend.

**Tim:**  
Ah.  
So… who owns the database?

**Amit:**  
That's exactly the problem.

*Aha moment #1: The real problem is not code. It's ownership.*

---

## The Setup (Without Fancy Words)

**Amit:**  
Let me explain it cleanly.

- There's a **Data Processing service (DP)**  
  It receives raw data, cleans it, and writes business entities like Products, Vendors, Batches.

- There's a **Data Serving service (DS)**  
  It reads those entities and exposes APIs to the frontend.

Small team. Same people. Same repo. Performance matters.

**Tim:**  
So DP writes. DS reads.

**Amit:**  
Yes.

**Tim:**  
And you're worried because every blog post says:  
> "A service must own its data. Other services must not touch its database."

**Amit:**  
Exactly.  
If DS calls DP for every read, we add a network hop we can't afford.  
If DS reads the DB directly, we're "doing it wrong".

*Aha moment #2: Architecture advice often ignores performance reality.*

---

## The First Honest Question

**Tim:**  
Let me ask you something uncomfortable.

Who owns both services?

**Amit:**  
We do.

**Tim:**  
Who deploys them?

**Amit:**  
We do.

**Tim:**  
Who gets paged when prod breaks?

**Amit:**  
…we do.

**Tim:**  
Then pretending these are independent kingdoms is already a lie.

*Aha moment #3: Organizational reality matters more than diagrams.*

---

## The Real Fear (Not the One People Admit)

**Amit:**  
I'm not afraid of coupling.

I'm afraid of *silent breakage*.

DP adds a column.  
DS crashes at runtime.  
No compiler warning. No review comment. Just… broken.

**Tim:**  
Good. That's the *right* fear.

*Aha moment #4: The danger isn't coupling — it's invisible coupling.*

---

## "Why Not Just Share the Data Model?"

**Amit:**  
What if we use a monorepo?

Same data models.  
DP writes using them.  
DS reads using them.

If someone changes a field, both break at compile time.

**Tim:**  
That helps. A lot.

But tell me — when does compilation happen?

**Amit:**  
Before deployment.

**Tim:**  
And when does the database schema change?

**Amit:**  
At runtime.

**Tim:**  
Exactly.

Shared code saves you from *accidental drift*.  
It does not save you from *deployment order*.

*Aha moment #5: Compile-time safety does not equal runtime safety.*

---

## The Database Is an API (Whether You Like It or Not)

**Tim:**  
Here's the uncomfortable truth:

The database schema *is* a public API.

**Amit:**  
But it's not HTTP.

**Tim:**  
Doesn't matter.  
If another service depends on it, it's an API.

Now tell me — would you ever design an API like this?

```json
GET /product
→ returns whatever fields exist today
```

**Amit:**  
Of course not.

**Tim:**  
Then why do people do this?

```sql
SELECT * FROM products;
```

*Aha moment #6: SQL can be just as dangerous as a bad REST API.*

---

## Why `SELECT *` Is a Trap

**Amit:**  
Okay, but what's *actually* wrong with it?

**Tim:**  
Three things.

1. DP adds a column → DS crashes at runtime
2. Column order changes → data maps incorrectly
3. Internal columns leak into the frontend

And the worst part?

None of these failures look obvious.

*Aha moment #7: The most dangerous bugs are silent ones.*

---

## "So What's the Alternative?"

**Amit:**  
Alright. No `SELECT *`.  
Explicit columns. Fine.

But DS is still reading tables DP owns.

How do we make DP free to evolve without breaking DS?

**Tim:**  
We draw a line.

Not in code.  
In the database.

*Aha moment #8: Boundaries don't have to be network calls.*

---

## Enter Views (The Unsung Hero)

**Tim:**  
DP owns tables.  
DP creates **views**.

DS reads **only views**.

```sql
CREATE VIEW v_products AS
SELECT id, name, price
FROM products;
```

That view is the contract.

**Amit:**  
But DP still controls the view.

**Tim:**  
Exactly.

Ownership doesn't change.  
**Evolution safety does.**

*Aha moment #9: Views decouple change velocity, not ownership.*

---

## Why Views Matter More Than They Look

**Tim:**  
Now DP can:

- Add columns to tables
- Add internal helper fields
- Store raw JSON
- Backfill data
- Refactor storage

And DS will never see any of it.

Because DS can only see what DP *chooses* to expose.

*Aha moment #10: Views turn discipline into enforcement.*

---

## "What About Breaking Changes?"

**Amit:**  
What if DP needs to change a column type? Or remove a field?

**Tim:**  
You never do that in-place.

You use the oldest trick in the book:

**Expand → Migrate → Contract**

1. Add a new column
2. Write both
3. Switch readers
4. Remove the old one *later*

Or, if it's big:

```sql
v_products_v1
v_products_v2
```

DS upgrades when ready.

Deployment order stops being scary.

*Aha moment #11: Versioning beats coordination.*

---

## The Moment Everything Clicks

**Amit:**  
So the final architecture is:

- DE extracts data
- DP processes and writes tables
- DP exposes views
- DS reads views and serves the frontend

No extra network hop.  
Clear ownership.  
Safe evolution.

**Tim:**  
Exactly.

And the most important rule?

**If it's not in a view, it's private.**  
DP can delete it freely — as long as it's not needed for reprocessing or rollback.

*Aha moment #12: Views define what is "public".*

---

## The Real Lesson

**Amit:**  
This doesn't feel "pure microservices".

**Tim:**  
Good.

It feels *honest*.

Architecture should reflect:

- Team size
- Performance needs
- Operational reality

Not blog posts written at infinite scale.

*Aha moment #13: Good architecture fits the team, not the trend.*

---

## Final Thought

Most engineers don't struggle with *writing* code.  
They struggle with *where boundaries should live*.

Sometimes the right boundary isn't another service.

Sometimes it's a **view**.

And once you see that — you can't unsee it.