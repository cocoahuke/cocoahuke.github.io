---
layout: page
title: Archive
---

<div class="terminal-archive">
  <div class="terminal-line">
    <span class="prompt">infosec@{{ site.title }}:~/archive$</span>
    <span class="command">find . -type f -name "*.md" | sort -r</span>
  </div>
  
  <div class="archive-description">
    <span class="comment"># Security research logs organized by timestamp</span>
  </div>
  
  {% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}
  {% for yearMonth in postsByYearMonth %}
    <div class="archive-month">
      <h2 class="archive-heading">
        <span class="folder-icon">📁</span> {{ yearMonth.name | date: "%Y-%m" }}
      </h2>
      <ul class="archive-list">
        {% for post in yearMonth.items %}
          <li class="archive-item">
            <div class="file-info">
              <span class="file-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              <span class="file-size">{{ post.content.size | divided_by: 1000 }}kb</span>
              <span class="file-type">markdown</span>
            </div>
            <a href="{{ site.baseurl }}{{ post.url }}" class="file-link">
              <span class="file-icon">📄</span>
              <span class="file-name">{{ post.title }}</span>
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
  
  <div class="terminal-line terminal-footer">
    <span class="prompt">infosec@{{ site.title }}:~/archive$</span>
    <span class="cursor blink">_</span>
  </div>
</div>

<style>
  .terminal-archive {
    font-family: var(--code-font);
    color: var(--hacker-text);
    background-color: rgba(0, 10, 0, 0.3);
    padding: 0;
    border-radius: 0;
    position: relative;
  }
  
  .terminal-line {
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--hacker-text-dim);
  }
  
  .terminal-footer {
    margin-top: 1.5rem;
    margin-bottom: 0;
    padding: 0.5rem 0;
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
  
  .archive-description {
    margin-bottom: 2rem;
  }
  
  .comment {
    color: var(--hacker-text-dim);
    font-style: italic;
  }
  
  .archive-month {
    margin-bottom: 2rem;
  }
  
  .archive-heading {
    color: var(--hacker-text-bright);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px dashed var(--hacker-text-dim);
    padding-bottom: 0.5rem;
  }
  
  .folder-icon {
    color: var(--hacker-accent);
    margin-right: 0.5rem;
  }
  
  .archive-list {
    list-style: none;
    padding-left: 1.5rem;
    margin: 0;
  }
  
  .archive-item {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .archive-item:hover {
    border-color: var(--hacker-text-dim);
    background-color: rgba(0, 255, 0, 0.05);
    transform: translateX(5px);
  }
  
  .file-info {
    display: flex;
    font-size: 0.8rem;
    color: var(--hacker-text-dim);
    margin-bottom: 0.3rem;
  }
  
  .file-date, .file-size, .file-type {
    margin-right: 1rem;
  }
  
  .file-link {
    color: var(--hacker-text);
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  .file-icon {
    margin-right: 0.5rem;
    color: var(--hacker-accent);
  }
  
  .file-name {
    position: relative;
  }
  
  .file-link:hover .file-name {
    color: var(--hacker-text-bright);
    text-shadow: 0 0 5px var(--hacker-text);
  }
  
  .cursor {
    display: inline-block;
    width: 0.5rem;
    height: 1rem;
    background-color: var(--hacker-text);
    vertical-align: middle;
  }
</style>
