# Shipping Labels Integration

Project overview: Improving the order fulfillment process for online store owners by integrating shipping label purchasing within the GoDaddy platform.
Tags: Discovery, Prototyping, UI Design, UX Design, Usability Testing, User Interview, Wireframes
Designer: Omar Guillermo
Release: July 5, 2022
Property: Released (Public)

<aside>
💡 This page adapts to your system’s Light/Dark mode settings. If you’d like to switch between modes you can press `cmd+shift+L`  on a Mac or `ctrl+shift+L`  on Windows

</aside>

The project by designer Omar Guillermo for GoDaddy aimed to improve the order fulfillment process for online store owners by integrating shipping label purchasing within the GoDaddy platform. The project involved user research, UX and UI design, and user testing, and resulted in a successful feature launch with significant usage over the first months. The integration with ShipEngine allowed GoDaddy store owners to purchase labels without leaving the platform, saving them time and money. After three months, 6,722 users were actively using the feature, and 7,521 labels were purchased.

# About

## The Client

![gd-logo.svg](Shipping%20Labels%20Integration/gd-logo.svg)

GoDaddy is an American publicly traded company that originally started as a web hosting and domain registration service. Today, it has evolved into one of the world's largest service platforms, focused on helping entrepreneurs grow. They offer a wide range of tools to empower businesses of any size, including online stores, payment processing, sales channels and social integrations, email marketing, and much more.

With over 21 million customers worldwide and over 84 million managed domain names, they are one of the most recognized names in the eCommerce space.

## The Project

<aside>
🚧 **The Problem**
Store owners spent a lot of time searching for the best rates for shipping labels instead of focusing on how to grow.

</aside>

<aside>
🎯 **The Goal**

- Improve and simplify the order fulfillment process
- Save C1s (online store owners) time and money when purchasing labels
</aside>

# Short on Time? Watch the video

[https://youtu.be/AzBIzmBGrhM](https://youtu.be/AzBIzmBGrhM)

**Before**

GoDaddy store owners lost time purchasing labels externally

**After**

Integration with ShipEngine that allows C1 to purchase labels without leaving GoDaddy

**Results**

**6,722 users actively using this feature** after 3 months

**7,521 labels purchased** in those 3 months

# Design Phases and Deliverables

| **Design Discovery** | User Personas, User Roles |
| --- | --- |
| **UX Design** | UX Review, Feature Map, Functional Requirements, User Flows, Wireframes, User Testing |
| **UI Design** | Design Library, Mood Board, Style Concepts, Style Guide, Static Mockups, Clickable Prototype |

# 🕵🏻‍♀️ Design **Discovery**

When I joined the GoDaddy project, the project was already kicked off. Design Discovery focused mostly on learning the user personas and jobs to be done.

## User Personas

GoDaddy’s research team already had some great insights on the expected use of this feature. These are called “Power Sellers”, merchants with $100K+ in annual Gross Payments Volume or GPV.

![Example of a Power Seller user persona](Shipping%20Labels%20Integration/powerseller-3.png)

Example of a Power Seller user persona

There were also existing data on a real Power Sellers profile.

![A real customer using GoDaddy Online Stores to sell and ship products](Shipping%20Labels%20Integration/powerseller_jcs_casting.png)

A real customer using GoDaddy Online Stores to sell and ship products

To summarize, Power Sellers:

- Are typically older, established businesses. 5+ years. Many 10+ years
- Many are Small (2-10 employees) and Large SMBs (10+)
- 80% of them are not web savvy
- Value their websites: Visual design, ordering/integration, delivery, ease of use
- Rarely change their setup unless they really need to

## User Roles / Jobs To Be Done

Now that we know Power Sellers deal with lots of orders. The main question is: **how do they fulfill them?**

![](https://images.unsplash.com/photo-1617909517054-64d4958be1c9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb)

<aside>
💡 **Jobs To Be Done: ISBAT**

- Handle more orders by making shipping simpler
- Have all the order details and tracking info in one place so I can provide this info to the customer if needed
- Save money by getting discounted label rates from the carrier I need
</aside>

![](https://images.unsplash.com/photo-1513672494107-cd9d848a383e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb)

<aside>
😩 **Pain Points**

- Sellers break fulfillment into chunks: they wait until there are multiple orders to box them at once
- They have to negotiate agreements with each carrier to get better rates
- Shipping mistakes can be costly
- Power Sellers need a piece of mind their package will get to its destination safely
</aside>

# 🧠 UX Design

## UX Review

The work started by reviewing the currently available features that merchants were using to purchase labels. At the time GoDaddy was offering Shippo, a multi-carrier shipping software, to their customers.

However, adoption wasn’t high. Only 11.3% were using it. Among the reasons was lack of trust, complexity, or simply merchants had already found another way to do it themselves.

![Shippo was an alternative for fulfillment and shipping. However, users didn’t find much value in it.](Shipping%20Labels%20Integration/shippo_data.png)

Shippo was an alternative for fulfillment and shipping. However, users didn’t find much value in it.

## Functional Requirements

The Project Manager let me know that we would use an API from a partner called ShipEngine®. This would enable GoDaddy customers to generate labels directly within GoDaddy.

![ShipEngine® homepage](Shipping%20Labels%20Integration/www.shipengine.com_.png)

ShipEngine® homepage

## Feature Map

Here is a list of features required for the shipping label workflow

[Untitled](Shipping%20Labels%20Integration/Untitled%20bfaa2f2dddc54073924f1f346ad1509c.csv)

## User Flows

The main challenge of this feature was the initial setup process. The user had to visit multiple pages and perform actions on each of them, which created a high risk of fatigue and information overload. We needed to make sure the process was straightforward, even if it was lengthy.

The process summarized is:

1. Order Details page - The user is recommended to try the new feature with a modal
2. Shipping Settings - The user learns more about the feature. Decides to set it up.
3. ShipEngine - Step-by-step process to agree to T&C, add payment info and add funds to the account
4. Buy Shipping Label page - The user fills in all package and shipment info. ShipEngine API returns the best available rates. The user proceeds to purchase it.
5. View and Print Label - The user can now print the label and attach it to the physical package.

## Wireframes

Order List and Order Details pages didn’t require to be designed, since they had already been developed. ShipEngine had its own design team so they took care of the integration setup experience.

Screens that were designed from scratch were Buy Shipping Label and View and Print Label. Here are some drafts for the layout and flow.

![Drafts for the Buy Shipping Label + View & Print Label experience](Shipping%20Labels%20Integration/wires-buyshippinglabel.png)

Drafts for the Buy Shipping Label + View & Print Label experience

The options for the Buy Shipping Label page were 2 columns, 3 columns, and a step-by-step flow. After a couple of reviews, it was decided that the 2 column was the most viable for MVP.

For the View and Print Label page, we picked the proposal with 3 side-by-side cards.

# 👁 UI Design

Thanks to GoDaddy already having a Design System in place, we went from sketches to high-fidelity rather quickly.

## Design System

This project used “DeepSee”, GoDaddy’s proprietary design system. It is important to note that the UI today has been updated to a cleaner style called “Antares”. However, at the time, it wasn’t available.

![Sample components and styles for the GoDaddy DeepSee language](Shipping%20Labels%20Integration/GoDaddy_DeepSee.png)

Sample components and styles for the GoDaddy DeepSee language

## Static Mockups

Since the flow covers multiple screens, I’ll explain step by step what’s going on. A clickable prototype will be attached at the end.

### Step 1: Order Details

The merchant is reviewing the contents of an order, the customer info, and the order status. There’s a new button that reads `Buy Shipping Label`

![Order Details page](Shipping%20Labels%20Integration/1a_order_details_unfulfilled.png)

Order Details page

Clicking the button will open a modal promoting the ShipEngine integration. The writing has been reviewed multiple times and shortened as much as possible to avoid discouraging users.

![If the user selects “Maybe Later”, this modal will close and won’t open again until a certain period of time has passed. If it showed on every order, the user would be quickly annoyed.](Shipping%20Labels%20Integration/1b_modal.png)

If the user selects “Maybe Later”, this modal will close and won’t open again until a certain period of time has passed. If it showed on every order, the user would be quickly annoyed.

### Step 2: Shipping settings

The user is taken to the shipping settings page before starting to set up ShipEngine. While this may seem like an extra click, we thought it was a necessary step to educate the users on where to find these settings.

![Shipping settings where the user will be able to manage or disconnect the integration](Shipping%20Labels%20Integration/2_shipping_settings.png)

Shipping settings where the user will be able to manage or disconnect the integration

### Step 3: ShipEngine side

Below is just one of the steps in the setup process. This happens on the ShipEngine side. The user has to set up at least one carrier, provide billing info, and add funds to the starting account balance.

![Users can always skip and set up carriers later](Shipping%20Labels%20Integration/3_shipengine_setup.png)

Users can always skip and set up carriers later

### Step 4: Buy Shipping Label page

Once ShipEngine has been set up, the user will be automatically taken back to GoDaddy with a new page opened. Here, the user can fill in all the shipping details, confirm if the customer address is right, calculate rates, pick a label, and finally purchase it.

![Info entered on Package Info and Ship To needs to be validated by the API before being able to return available rates](Shipping%20Labels%20Integration/4_buy_shipping_label.png)

Info entered on Package Info and Ship To needs to be validated by the API before being able to return available rates

### Step 5: View and Print Shipping Label

Once the purchase processing has been completed, the user will be taken to a page where they can print or refund the label. A growl helps reaffirms what happened.

![Note: The empty space after the Refund card was caused by the fact that View and Print were initially different actions. This page layout was updated during a later sprint.](Shipping%20Labels%20Integration/5_print_label_with_confirmation.png)

Note: The empty space after the Refund card was caused by the fact that View and Print were initially different actions. This page layout was updated during a later sprint.

## Clickable Prototype

This is the one we used for the User Interviews during the Testing phase. It contains all the flow from start to finish.

[https://www.figma.com/proto/jS9lpzXQorkkrfDoTYYFeO/Create-a-Shipping-Label-%2B-Shipping-Settings?page-id=718%3A49226&node-id=2683-141709&viewport=343%2C-865%2C0.07&scaling=min-zoom&starting-point-node-id=2683%3A141709&show-proto-sidebar=1](https://www.figma.com/proto/jS9lpzXQorkkrfDoTYYFeO/Create-a-Shipping-Label-%2B-Shipping-Settings?page-id=718%3A49226&node-id=2683-141709&viewport=343%2C-865%2C0.07&scaling=min-zoom&starting-point-node-id=2683%3A141709&show-proto-sidebar=1)

## Usability Testing

The prototype above was presented to actual users from the GoDaddy Customer Council. Both small business owners and power sellers were interviewed. Our main goal was to learn if the new feature would bring value to their daily workflow.

![zoom calls.png](Shipping%20Labels%20Integration/zoom_calls.png)

Here are some quotes directly from the interviews:

<aside>
👍 **Positives**

“I’ve used a fair share of shipping tools, and this one was pretty easy to setup compared to others”

“I trust GoDaddy. I wouldn’t trust my shipping to other companies.”

“It’s valuable to keep me within the GoDaddy ecosystem.”

“It would save me a lot of time. If it was available today, I would use it!”

</aside>

<aside>
👎 **Negatives**

“I don’t see any GoDaddy logo in this ShipEngine, can I trust them?”

“I prefer Shopify because it doesn’t require integrations. The fewer integrations I have to set up, the better.”

“I already negotiated a 60% discount with UPS, doubt you can top that!” 

</aside>

After getting this feedback, we knew we were on the right path. The project was handed off after some minor fixes like adding the GoDaddy logo to ShipEngine flow, and better writing in the promotional models.

# ☝️Results

The feature was officially released on [June 2022](https://aboutus.godaddy.net/newsroom/company-news/news-details/2022/-Release-Notes-June-2022/default.aspx).

Later that month, our team received a shout-out in an All-Hands meeting. It was mentioned that 2,000 GoDaddy Commerce users were already using the ShipEngine integration to purchase labels on launch.

![Results presented during a company-wide meeting (sorry for the quality!)](Shipping%20Labels%20Integration/Screen_Shot_2022-08-09_at_10.22.47.png)

Results presented during a company-wide meeting (sorry for the quality!)

After 3 months, the PM presented updated results:

**6,722 users actively using the feature** - A **236.1%** increase! 

**7,521 labels purchased** in those 3 months

![stats.png](Shipping%20Labels%20Integration/stats.png)

We did some incremental improvements in the following months such as:

- Reposition the Calculate Rates button to have it above the fold and increase CTR
- Ability to support predefined carrier packages
- Displaying included insurance and package type per label
- Shipping Label purchased an entry in the Order Details history card
- Redesigned the View and Print page to allow customization of packing slips

# 👋 Closing Thoughts

It was inspiring to see all the pieces come together after months of hard work. The talented teams from both GoDaddy and ShipEngine made it possible, and I'm grateful to have participated in this project. Through this experience, I gained insight into the daily challenges of eCommerce merchants and how a good user experience empowers them to achieve more sales by making a tedious process easier.