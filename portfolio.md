---
layout: default
title: Portfolio
---

{% for post in site.posts %}
  <div class="card bg-light mb-3">
    <h4 class="card-header">
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </h4>
    <div class="card-body">
      <div class="card-text">{{ post.description }}</div>
    </div>
    <small class="text-right"> {{ post.date | date: "%-d %B %Y" }}</small>
  </div>
{% endfor %}
