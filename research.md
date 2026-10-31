---
layout: page
title: Research
permalink: /research/
---
{% for r in site.data.research %}
## {{ r.title }}

{{ r.summary }}
{% endfor %}
