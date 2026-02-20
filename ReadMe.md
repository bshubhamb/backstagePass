### BackStagePass ###

This is a web app to show list of posts for a challenge from different users.

# Components: ##

1. Sidebar
2. Header
3.Feed

> Header
+ Needs to be common across the application. This will be a high level component that will showcase information about user and back functionality.
+ Need to add side bar. The CSS seems a bit tricky.
+ The feed itself. Feed is a large component, need to break it down into smaller components.

## Directory structure
> src > components > {mainComponents} > {required components}

The segregated components are arranged in a manner to have all child components to be deeper in directory structure.

> Feed:
1. The feed cards.
2. Logic to make the cards.
3. WHere is user interaction to show diffferent types of cards.
4. The Post card can be created as component using createPortal, similar to a popup.

> Feed cards, Reactions of each kind, The feed itself.

> Header - Top and bottom headers.

The theme can be implemented using context api of react. This allows us to change the theme when we want, in our case I have added a button on top right. 