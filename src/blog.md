---
layout: default
title: Blog
---


{%- for post in collections.blog -%}
  <div>
    <h4>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </h4>
    <div>
      <div >{{ post.data.description }}</div>
    </div>
    <small> {{ post.data.date | date: "%dth %B %Y" }}</small>
  </div>
{%- endfor -%}
