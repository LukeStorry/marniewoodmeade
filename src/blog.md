---
layout: default
title: Blog
# in_navbar: 3
description: Some of my musings.
---

<div class="row">
{%- for post in collections.blog -%}
  <div class="card eight columns offset-by-two">
    <h4 class="center-text"><a href="{{ post.url }}">{{ post.data.title }}</a></h4>
    <p>{{ post.data.description }}</p>
    <div class="date"> {{ post.data.date | date: "%d %B %Y" }}</div>
  </div>
{%- endfor -%}
</div>
