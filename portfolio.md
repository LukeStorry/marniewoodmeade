---
layout: default
title: Portfolio
---

{% for post in site.posts %}

  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <small>{{ post.date | date: "%-d %B %Y" }}</small>
    <p>{{ post.description }}</p>
  </div>
{% endfor %}
