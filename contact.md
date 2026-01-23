---
layout: page
title: Contact | Book a Free AI Consultation Call
description: Schedule a 30-minute clarity call to discuss how AI can help your business. No pitch, no demos—just a conversation about your workflows and whether AI makes sense for you.
keywords: AI consultation, book AI call, AI consultant contact, free AI consultation, AI strategy call
---

## Let's Talk

This isn't a sales pitch.

The first conversation is about understanding whether AI makes sense for your business at all — and where it doesn't.

<form id="contact-form" class="contact-form" novalidate>
  <div id="form-success" class="form-success" style="display: none;">
    <div class="success-icon">✓</div>
    <h3>Message sent successfully!</h3>
    <p>Thank you for reaching out. I'll get back to you within 24–48 hours.</p>
    <p class="success-redirect">Redirecting to home page...</p>
  </div>

  <div id="form-content">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div class="form-group">
      <label for="company">Company <span style="color: var(--light-text-secondary); font-weight: normal;">(optional)</span></label>
      <input type="text" id="company" name="company" />
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <!-- Anti-spam -->
    <input type="text" name="_gotcha" style="display:none">

    <button type="submit" class="btn btn-primary" id="submit-btn">
      <span id="submit-text">Send message</span>
      <span id="submit-loading" style="display: none;">Sending...</span>
    </button>
  </div>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formContent = document.getElementById('form-content');
    const formSuccess = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitLoading = document.getElementById('submit-loading');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Disable submit button
      submitBtn.disabled = true;
      submitText.style.display = 'none';
      submitLoading.style.display = 'inline';
      
      // Get form data
      const formData = new FormData(form);
      
      try {
        const response = await fetch('https://formspree.io/f/maqeewkk', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Show success message
          formContent.style.display = 'none';
          formSuccess.style.display = 'block';
          
          // Redirect to home page after 3 seconds
          setTimeout(function() {
            window.location.href = '/';
          }, 3000);
        } else {
          // Handle error
          const data = await response.json();
          alert('Sorry, there was an error sending your message. Please try again or email me directly.');
          submitBtn.disabled = false;
          submitText.style.display = 'inline';
          submitLoading.style.display = 'none';
        }
      } catch (error) {
        // Handle network error
        alert('Sorry, there was an error sending your message. Please try again or email me directly.');
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoading.style.display = 'none';
      }
    });
  });
</script>

<p style="text-align: center; color: var(--light-text-secondary); margin-top: var(--spacing-md);">I typically respond within 24–48 hours.</p>

<div style="text-align: center; margin-top: var(--spacing-lg); padding-top: var(--spacing-md); border-top: 1px solid var(--light-border);">
  <p style="margin-bottom: var(--spacing-sm);">Prefer a conversation?</p>
  <p style="margin-bottom: var(--spacing-md); color: var(--light-text-secondary);">If it's easier, you can book a 30-minute clarity call directly.</p>
  <a
    href="https://calendly.com/vgvishesh_/30min"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-secondary"
  >
    Book a clarity call
  </a>
</div>
