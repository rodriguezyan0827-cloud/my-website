import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src=${viteLogo} class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src=${viteLogo} alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${javascriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))

//CONTACT SCRIPTS
const form = document.getElementById('contactForm');
 
    const fields = {
      firstName: { id: 'firstName', errorId: 'firstNameError', validate: v => v.trim() !== '' },
      lastName:  { id: 'lastName',  errorId: 'lastNameError',  validate: v => v.trim() !== '' },
      email:     { id: 'email',     errorId: 'emailError',     validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
      message:   { id: 'message',   errorId: 'messageError',   validate: v => v.trim().length >= 5 },
    };
 
    function showError(field, show) {
      const el = document.getElementById(field.errorId);
      const input = document.getElementById(field.id);
      el.classList.toggle('hidden', !show);
      input.style.borderColor = show ? '#f87171' : '';
    }
 
    // Live validation on blur
    Object.values(fields).forEach(field => {
      const input = document.getElementById(field.id);
      input.addEventListener('blur', () => {
        const valid = field.validate(input.value);
        showError(field, !valid);
        if (valid) input.style.borderColor = '#60a5fa';
      });
      input.addEventListener('input', () => {
        if (!document.getElementById(field.errorId).classList.contains('hidden')) {
          if (field.validate(input.value)) showError(field, false);
        }
      });
    });
 
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
 
      Object.values(fields).forEach(field => {
        const input = document.getElementById(field.id);
        const ok = field.validate(input.value);
        showError(field, !ok);
        if (!ok) valid = false;
      });
 
      if (valid) {
        document.getElementById('successMsg').classList.remove('hidden');
        form.reset();
        Object.values(fields).forEach(f => {
          document.getElementById(f.id).style.borderColor = '';
        });
        setTimeout(() => {
          document.getElementById('successMsg').classList.add('hidden');
        }, 4000);
      }
    });

    //NAVBAR && BUTTONS
    const btn = document.getElementById('menuBtn');
    const dropdown = document.getElementById('dropdown');
    btn.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('flex', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });


 