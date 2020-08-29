---
templateKey: thesis-post
title: Chapter 04 — Data Collection and Analysis
date: 2020-08-25T20:39:37.997Z
featuredimage: /img/data.jpg
---
## 4.1. Gathering Data 

Through previous experimentation with the Application Programming Interfaces of Facebook, Twitter, and Instagram I was able to become more familiar with their capabilities and limitations. Facebook is relatively locked down in terms of data access–*especially publicly accessible information*–and filtering through their query results can be cumbersome, Twitter focuses on a range of media which is traditionally just text, and Instagram focuses on photographs–*the medium of a selfie*–and is one of the largest and most thriving social networks of this time. The figure below shows the history of monthly active Instagram users. It illustrates a steady and growing increase of users over the past 3 years. Based on this information–*and already having part the script developed*–I made the decision to move forward gathering posts with the hashtag of selfie (#selfie) from Instagram.

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_031_image_0001.jpg)

Figure 7. Graph showing Instagram user growth (Statista 2015) 

In order to observe the users of Instagram in new ways, I needed to access the data in a much more malleable manner. There are limited means to browse and collect the posts of Instagram. However, it is possible, and it is public. To assist in gathering data I built a custom system including automated sever scripts to gather and transfer data from Instagram to a personal database. Transferring this data to my own location allowed me to easily organize and explore what was happening.

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_032_image_0001.jpg)

Figure 8. Screen shot of code for the selfie data models 

All of the captured data was publically available through Instagram’s Application Programing Interface. Instagram’s publically accessible data access is limited. You are only permitted to access a certain amount of data per request over a given amount of time. Currently you are able to access 500 Instagrams an hour (Instagram 2016). Meaning, automated scripts were needed to be developed to make many requests to the Instagram network over an extended period of time allowing me to piece together a robust functional database of selfies spanning a matter of weeks.

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_033_image_0001.jpg)

Figure 9. Screenshot of CSV data sheet before database import 

To accomplish automated data collection I made use of a variety of programming languages and terminal functionalities.  Server cron jobs allowed me to automate the gathering of selfie data with PHP. This PHP script created a hierarchy of CSV documents. Within these CSV documents was the publically accessible Instagram data of Instagram posts with the hashtag of selfie (#selfie). Later, using a shell connection, I traversed through these CSV files and imported the captured data into a custom Django webapp. Django allowed me to create specific data models for data replication while also offering a powerful system of templating functionality and is paired with the data processing ability of the Python language.

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_034_image_0001.jpg)

Figure 10. Screenshot of Django data admin interface 

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_034_image_0002.jpg)

Figure 11. Screenshot of data viewing interface