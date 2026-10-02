---
layout: default
---

{% assign years_at_rdi = 'now' | date: '%Y' | minus: 2013 %}

## About {#about}

Hi, I'm Chad. I lead small teams at Resource Data building web applications for our clients, mostly public agencies, and I own the cloud infrastructure and pipelines those apps run on from the first architecture decisions through years of running them in production.
{: .lede}

[Resource Data](https://www.resourcedata.com) is a technology consulting firm with offices in Alaska, Idaho, Oregon and Texas, and I've been here {{ years_at_rdi }} years, working out of Portland. I got my start in GIS in 2010 and maps still show up in a lot of what I build. Most of my work now is full stack development and site reliability engineering on AWS, and lately that's meant modernizing older applications, moving them to the cloud and getting them ready for compliance frameworks like SOC 2 and CMMC.

I also sit on Resource Data's board of directors, where part of my focus is how the company adopts AI and emerging technology.

## How I work {#how-i-work}

Most of the projects I lead run for years, so I build them expecting to be the one supporting them down the road. Infrastructure goes into Terraform from day one, every change runs through a pipeline that lints, tests and scans it before it ships, and monitoring is set up so we hear about a problem before a user has to tell us. Catching a bug in the pipeline is a lot cheaper for y'all than catching it in production once it's turned into support calls and frustrated users.

Whatever the main goal of a project is, a new set of features, a cloud migration or a SOC 2 Type I/II audit, I plan the work so it also leaves the application more scalable, stable and resilient, easier to maintain and operate, and nicer for the next developer to work in.

I do a lot of the work before a project starts too, scoping it, estimating it and laying out the architecture with the client, so the person making those early calls is the same one who'll be living with them in production. When something does go wrong I'll tell you right away, along with what caused it and what we've already done about it.

## Selected work {#work}

<div class="projects">
{%- for project in site.data.projects %}{% if project.featured %}
{% include project-card.html project=project heading="h3" %}
{%- endif %}{% endfor %}
</div>

### More projects

<div class="projects projects-compact">
{%- for project in site.data.projects %}{% unless project.featured %}
{% include project-card.html project=project heading="h4" %}
{%- endunless %}{% endfor %}
</div>

## Skills {#skills}

<div class="skill-grid" markdown="1">
<section markdown="1">
### Full stack development

- React, Redux and TypeScript
- ASP.NET Core and .NET Framework, Node.js and Express
- PostgreSQL and SQL Server
- Earlier production work in ASP.NET MVC, Django and WPF desktop and tablet apps
</section>

<section markdown="1">
### Cloud infrastructure and SRE

- AWS, mostly EKS, EC2, RDS, S3, VPC, IAM and CloudFront, plus GCP
- Terraform and Terragrunt
- GitHub Actions and ArgoCD
- Docker, Kubernetes and Helm
- Trivy, Anchore and Grype for container scanning
- Prometheus and Grafana for monitoring and alerting
</section>

<section markdown="1">
### Delivery and leadership

- Leading small delivery teams
- Scoping, estimates and proposals
- Architecture and technical design
- Code review and mentoring
- Interviewing engineering candidates
</section>

<section markdown="1">
### GIS

- ArcGIS Enterprise and ArcGIS Online
- ArcGIS Maps SDK for JavaScript and the ArcGIS REST API
- ArcGIS Server, ArcSDE and ArcPy
- Leaflet
</section>

<section class="wide" markdown="1">
### AI-assisted development

I use AI coding agents every day for spec-driven and agentic development, across GitHub Copilot, Claude Code and Gemini. A lot of our clients decide which AI tools their contractors can use, so I keep our teams proficient in whichever one a client has picked, set up project-specific instructions and skills tuned to each codebase, and coach teams on getting good results out of them.
</section>
</div>

## Experience {#experience}

{% include experience.html %}

### Education

- M.A., Geographic Information Systems, California State University, Northridge (2013)
- B.A., Geography, California State University, Northridge (2010)

## Joining Resource Data {#joining-rdi}

Resource Data has offices in Anchorage, Juneau, Boise, Houston and Portland, and a lot of roles can be remote since most of our clients are open to remote team members. Our career paths cover software development, systems engineering, data engineering, GIS, business analysis and project management, and open positions are posted on our [careers page](https://www.resourcedata.com/careers/).

The teams I lead are small, so everybody owns features from the database through to production, and every pull request gets a review from a teammate before it merges. There's plenty of room to grow into infrastructure and SRE work if that interests you, which is the same path I took coming up from GIS.

## Away from work {#away}

Away from the keyboard I'm usually snowboarding, brewing beer, top roping or bouldering, or playing with my kids. That's Pivo with me in the photo.

## Contact {#contact}

Whether it's a project, a role at Resource Data or anything else, email me at [chadmarchdev@gmail.com](mailto:chadmarchdev@gmail.com) or find me on [LinkedIn](https://www.linkedin.com/in/chadmarch/), which is also where you'll find recommendations from people I've worked with.
