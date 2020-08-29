---
templateKey: thesis-post
title: Chapter 04 — Data Collection and Analysis
date: 2020-08-25T20:39:37.997Z
featuredimage: /img/data.jpg
---
## 4.1. Gathering Data

Through previous experimentation with the Application Programming Interfaces of Facebook, Twitter, and Instagram I was able to become more familiar with their capabilities and limitations. Facebook is relatively locked down in terms of data access–*especially publicly accessible information*–and filtering through their query results can be cumbersome, Twitter focuses on a range of media which is traditionally just text, and Instagram focuses on photographs–*the medium of a selfie*–and is one of the largest and most thriving social networks of this time. The figure below shows the history of monthly active Instagram users. It illustrates a steady and growing increase of users over the past 3 years. Based on this information–*and already having part the script developed*–I made the decision to move forward gathering posts with the hashtag of selfie (#selfie) from Instagram.

`youtube:https://www.youtube.com/embed/IRipnVvnaIg`

![Figure 7. Graph showing Instagram user growth (Statista 2015)](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_031_image_0001.jpg "Figure 7. Graph showing Instagram user growth (Statista 2015)")

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

### Data Gathered

Unique Selfies: 225,117 \
Unique Users: 164,888 \
Unique Tags: 289,079 \
Unique Locations: 21,616 \
Unique Filters: 44

Table 1. Numbers of data gathered 

## 4.2. Findings

A desired sample size is 385 participants, this achieves a 90% confidence level with a standard deviation of +/- 5% the desired sample size is 385 participants (Smith 2013). I was able to collect a sample of 225,117 unique selfies, a significantly larger sample of data than the calculated sample necessary for the desired confidence. By taking inspiration from the Network Effect, similar to their data sampling I pulled the first viable 10,000 selfies gathered. 

These findings are based on an observational study of Online Social Networking, what people are posting, and why they are posting it. This could be applied to any Online Social Network across the history of Online Social Networking. However, as discussed above, I decided to focus on Instagram and posts hashtagged with the term selfie (#selfie). 

Unlike the words of Thomas Jefferson, all selfies are not created equal. Social media has become an outlet for relentless self-promotion. Whether this self-promotion be business or personally related, with it comes a battery of unrelated posts lacking any personal content other than the propaganda of commercial ideals.

The hashtag was created in 2007 to assist active Online Social Network users organize and browse through posted media (Doctor 2013). Now, it can be–*and is*–conveniently used to help organize and forward online promotional campaigns. Through the data collected in this study, I observed that the hashtag of selfie (#selfie) is victim to this organized promotion. 

This study is focused on self-perception and not commercial propaganda or gain. For this reason I curated the set of selfies to fit within the focus of self-perception. To aid in curation I collected a blacklist of hashtags. This blacklist consists of tags often used to promote things like business advertisements, advertisements to sell followers, advertisements to sell likes, or advertisements to promote blogs–*often on the topic of fashion or fitness*. The most commonly exhibited hashtag culprits are as follows:

*followme, like4like, instagood, follow, me, follow4follow, picoftheday, photooftheday, likeforlike, tagsforlikes, instalike, instadaily, f4f, l4l, like, bestoftheday, like*

## 4.3. Selfie Categories

After curating and observing the set of selfies, connections became apparent. Sets of similar compositions, poses, and ideas were being communicated. These groupings–*categories*–in terms of types of photographs were repeatedly being captured and tagged as a selfie (#selfie). The users of Instagram–*those who create posts with the hash tag selfie (#selfie)*–have developed a visual language. A visual language, universally used, that aids in developing a deeper sense of self by engaging with Online Social Networks. These findings are directly related to research question one: “*In what ways are people engaging with Online Social Networks to develop a deeper sense of self?*” 

By defining these categories–*or perhaps rules*–of selfie communication, a base of organization will be created. It will provide an organizational structure aiding in further exploration of this visual language. In this we may find a better understanding of Online Social Networks and their role in extension of self. Below are the categories I observed as online self-defining activity displayed through selfies.

*The Activity Selfie*\
*The Affection Selfie*\
*The Association Selfie*\
*The Body Selfie*\
*The Emotion Selfie*\
*The Face Selfie*\
*The Fantasy Selfie*\
*The Mirror Selfie 
The Group Selfie*\
*The Object Selfie*

### The Activity Selfie

*The user portrays themself performing an activity.*

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_038_image_0001.jpg)

Figure 13. A series of affection selfies gathered publicly from Instagram

A must do for the hopeless romantic, users who are proud of their significant other will most definitely have one of these in their feed. The ability to show yourself connected with another displays a sense of passion, companionship, and a proud distinction of having someone else in your life. Not to mention your ability to show affection publicly.

### The Association Selfie

*The user portrays themself associated with another person, object, or idea by placing it in frame with them.*

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_039_image_0001.jpg)

Figure 14. A series of association selfies gathered publicly from Instagram

A deep connection of object, place, or ideals can be seen in the association selfie. By making sure something like an artifact, well known landscape, or meaningful phrase is in the frame with you, people can gain a deeper sense of what you are about. The association selfie is for those who think their worth is about more than just their physical being.

### The Body Selfie

*The user portrays a part of their body absent of their face.*

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_040_image_0001.jpg)

Figure 15. A series of body selfies gathered publicly from Instagram

Sometimes it’s about the whole package, or at least a majority of the package. Do you have a favorite body part? Are you proud of much more than just your smile? The body selfie is a perfect way to show off your summer body or build tension of the unknown leaving people wondering and wanting more.

### The Emotion Selfie

*The user portrays an emotion through means of facial expression, hand gesture, or body positioning.*

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_042_image_0001.jpg)

Figure 16. A series of emotion selfies gathered publicly from Instagram 

Humans are capable of understanding a rainbow of emotion and expression. Some of us are more apt to wanting to share those than others. For the intimate and open user the emotion selfie is a great way to reach out and let people know your current status. Whether the bottom is rough and rocky or the sun is shining high you can let the network know your current needs through our universal understanding of emotion.

### The Face Selfie

*The user portrays themself in a traditional–face on–self portrait taken by their self.* 

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_043_image_0001.jpg)

Figure 17. A series of face selfies gathered publicly from Instagram 

This is the literal definition of selfie. The user, by capturing a portrait of just their face, lets people see who they are. Often paired with a smile or a model like facial pose the face selfie is the most self-driven selfie. Barren of anything but the model himself, its mission is most often just to let the world see them, motivated by self-love.

### The Fantasy Selfie

*The user portrays their self in a fantastical manner through means of photo manipulation, props, or composition.*

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_044_image_0001.jpg)

Figure 18. A series of fantasy selfies gathered publicly from Instagram

For the more imaginative or creative user, this category of selfie is seen posted by those wishing to live in a world other than their own. If you have a crush on a movie character or wish to live in an alien world, the fantasy selfie is a perfect way to set up the scene of your ideal world for the whole network to know. After all, reality is just relative.

### The Mirror Selfie

*The user makes use of a mirror to capture the selfie. Often used to capture a larger portion of the body.*

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_045_image_0001.jpg)

Figure 19. A series of mirror selfies gathered publicly from Instagram 

Sometimes the face just isn’t enough. If you are proud of your whole body or the situation you are currently in, the mirror selfie is a great way to capture a larger perspective. While still making sure you–all of you–is in the frame, the user can create greater context for the viewers, or just make sure they see the entire outfit you picked for that night. A clever way to make use of past and present technologies to gain advantage.

### The Group Selfie

*The user portrays their self with one or more other people.* 

![](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_046_image_0001.jpg)

Figure 20. A series of group selfies gathered publicly from Instagram

Standing on the shoulders of giants is the way humanity has advanced. The group selfie is a testament to our longing for community and the power displayed by sticking together. By pairing yourself with a friend, or group of friends, you can show that you are accepted and appreciated and that you appreciate and are willing to work with others. The “team player” of selfies.

### The Object Selfie

*The user portrays an object, idea, person, or place absent of themselves.*

![Figure 21. A series of object selfies gathered publicly from Instagram](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_047_image_0001.jpg "Figure 21. A series of object selfies gathered publicly from Instagram")

Figure 21. A series of object selfies gathered publicly from Instagram

For those who can find beauty in what lies beyond themselves. The object selfie is a great way to display the things you love or put emphasis on something greater than who you are. We obsess over our possessions and marvel in the world around us. The object selfie shows just what it is that is dear to you, other than yourself.