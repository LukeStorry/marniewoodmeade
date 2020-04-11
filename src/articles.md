---
layout: default
title: Articles
in_navbar: 2
description: On my articles page, you can see a list of some of the recent interviews, reviews, and discussions that I have written for various news-outlets and think-tanks.
---

{% for post in collections.articles %}

<div class="card">

{% if post.data.image and post.data.image != '' %}

<div class="highlight">
  <img src="{{ post.data.image }}"/>
  <h4> <a href="{{ post.url }}">{{ post.data.title }}</a></h4>
</div>
{% else %}
  <h4> <a href="{{ post.url }}">{{ post.data.title }}</a></h4>
{% endif %}

  <p>{{ post.data.description }}</p>
  <div class="date"> {{ post.data.date | date: "%d %B %Y" }}</div>

</div>

{% endfor %}
