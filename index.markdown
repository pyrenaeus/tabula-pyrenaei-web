---
layout: default
title: Inicio
---

<div class="post-grid">
  {% for post in site.posts %}
  {% unless post.path contains 'markers-part' %}
  <a class="post-card" href="{{ post.url | relative_url }}">
    <div class="post-card-img-wrap">
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}">
      {% else %}
        <div class="post-card-no-img"></div>
      {% endif %}
    </div>
    <div class="post-card-body">
      <span class="post-card-date">{{ post.date | date: "%d %b %Y" }}</span>
      <h2 class="post-card-title">{{ post.title }}</h2>
    </div>
  </a>
  {% endunless %}
  {% endfor %}
</div>
