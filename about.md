---
layout: post
title: About the Researcher
image: /assets/IMG_2771.webp
---

<div class="terminal-about">
  <div class="terminal-line">
    <span class="prompt">infosec@{{ site.title }}:~/about$</span>
    <span class="command">cat researcher_profile.txt</span>
  </div>
  
  <div class="about-content">
    <div class="ascii-art">
```
  _____      _                                      _ _         
 / ____|    | |                                    (_) |        
| |     ___ | |__   ___  __ _  /\  /\  _   _  | | |_| |_ _   _ 
| |    / _ \| '_ \ / _ \/ _` | \ \/ / | | | | | | | | __| | | |
| |___| (_) | | | |  __/ (_| |  \  /  | |_| | | | | | |_| |_| |
 \_____\___/|_| |_|\___|\__,_|   \/    \__,_| |_| |_|\__|\__, |
                                                           __/ |
                                                          |___/ 
```
    </div>
    
    <div class="profile-section">
      <h3 class="section-title">// IDENTITY</h3>
      <div class="profile-data">
        <div class="data-row">
          <span class="data-label">Handle:</span>
          <span class="data-value">@08tc3wbb</span>
        </div>
        <div class="data-row">
          <span class="data-label">Occupation:</span>
          <span class="data-value">Software Engineer & Security Researcher</span>
        </div>
        <div class="data-row">
          <span class="data-label">Specialization:</span>
          <span class="data-value">Vulnerability Research | Binary Analysis | Reverse Engineering</span>
        </div>
      </div>
    </div>
    
    <div class="profile-section">
      <h3 class="section-title">// ABOUT</h3>
      <p class="about-text">
        I'm a software engineer with a passion for information security research, focusing on vulnerability discovery, binary analysis, and reverse engineering. The unpredictable nature of security research keeps me engaged and constantly learning.
      </p>
      <p class="about-text">
        When I'm not hunting for vulnerabilities, I develop practical applications that solve real-world problems. I occasionally release these tools on <a href="https://github.com/cocoahuke" target="_blank">GitHub</a>, and it's rewarding to see others find them useful.
      </p>
      <p class="about-text">
        This blog serves as a platform to share my research findings, technical insights, and occasional thoughts on the evolving landscape of information security.
      </p>
    </div>
    
    <div class="profile-section">
      <h3 class="section-title">// CONTACT</h3>
      <div class="contact-info">
        <div class="contact-method">
          <span class="contact-icon">🔒</span>
          <span class="contact-label">Secure Communication:</span>
          <a href="https://twitter.com/@08tc3wbb" target="_blank" class="contact-link">Twitter/X @08tc3wbb</a>
        </div>
        <div class="contact-method">
          <span class="contact-icon">💻</span>
          <span class="contact-label">Code Repository:</span>
          <a href="https://github.com/cocoahuke" target="_blank" class="contact-link">GitHub @cocoahuke</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="terminal-line terminal-footer">
    <span class="prompt">infosec@{{ site.title }}:~/about$</span>
    <span class="cursor blink">_</span>
  </div>
</div>

<style>
  .terminal-about {
    font-family: var(--code-font);
    color: var(--hacker-text);
    background-color: rgba(0, 10, 0, 0.3);
    padding: 1.5rem;
    border-radius: 0;
    position: relative;
    border: 1px solid var(--hacker-text-dim);
    margin-top: 2rem;
  }
  
  .terminal-line {
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--hacker-text-dim);
  }
  
  .terminal-footer {
    margin-top: 1.5rem;
    margin-bottom: 0;
    padding-top: 0.5rem;
    border-top: 1px solid var(--hacker-text-dim);
    border-bottom: none;
  }
  
  .prompt {
    color: var(--hacker-text-bright);
    margin-right: 0.5rem;
  }
  
  .command {
    color: var(--hacker-accent);
  }
  
  .about-content {
    padding: 0 1rem;
  }
  
  .ascii-art {
    color: var(--hacker-accent);
    font-size: 0.7rem;
    line-height: 1;
    margin-bottom: 2rem;
    text-align: center;
    overflow-x: auto;
  }
  
  .profile-section {
    margin-bottom: 2rem;
  }
  
  .section-title {
    color: var(--hacker-text-bright);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    border-bottom: 1px dashed var(--hacker-text-dim);
    padding-bottom: 0.5rem;
  }
  
  .profile-data {
    padding-left: 1rem;
  }
  
  .data-row {
    margin-bottom: 0.5rem;
  }
  
  .data-label {
    color: var(--hacker-accent);
    margin-right: 0.5rem;
  }
  
  .data-value {
    color: var(--hacker-text);
  }
  
  .about-text {
    line-height: 1.6;
    margin-bottom: 1rem;
    padding-left: 1rem;
    position: relative;
  }
  
  .about-text::before {
    content: ">";
    position: absolute;
    left: 0;
    color: var(--hacker-text-dim);
  }
  
  .contact-info {
    padding-left: 1rem;
  }
  
  .contact-method {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .contact-icon {
    margin-right: 0.5rem;
  }
  
  .contact-label {
    color: var(--hacker-accent);
    margin-right: 0.5rem;
  }
  
  .contact-link {
    color: var(--hacker-text);
    text-decoration: none;
    border-bottom: 1px dashed var(--hacker-text-dim);
    transition: all 0.3s ease;
  }
  
  .contact-link:hover {
    color: var(--hacker-text-bright);
    text-shadow: 0 0 5px var(--hacker-text);
    border-bottom-color: var(--hacker-text);
  }
  
  .cursor {
    display: inline-block;
    width: 0.5rem;
    height: 1rem;
    background-color: var(--hacker-text);
    vertical-align: middle;
  }
  
  /* Add scan lines effect */
  .terminal-about::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 10, 0, 0.05) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 1;
    opacity: 0.2;
  }
</style>
