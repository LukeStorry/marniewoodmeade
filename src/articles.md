---
layout: default
title: Articles
in_navbar: 2
---

<div class="row">
{%- for post in collections.articles -%}
 <div class="card col l8 s12 offset-l2">
  <div class="card-content">
    <span class="card-title ">
        <a href="{{ post.url }}">{{ post.data.title }}</a>
        </span>
    <p>{{ post.data.description }}</p>
    <p class="right-align"> {{ post.data.date | date: "%d %B %Y" }}</p>
  </div>
  </div>
{%- endfor -%}
</div>
