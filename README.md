## Requirement
To create a dashboard as per the [figma design](https://www.figma.com/file/KdCSTYw5RVjitKqvNLfSBW/Instill-Frontend-Project?node-id=0%3A1&t=HzBp3hnVNRdW0qeb-1). This will be built using React and TypeScript. The screen should be responsive and mobile-friendly.

## Demo Screenshots

### Desktop
![image](https://user-images.githubusercontent.com/18692751/224035894-acc055e0-8591-45e6-a29e-f4f105f10194.png)


### Responsive in Desktop (when screen size changes)
![image](https://user-images.githubusercontent.com/18692751/224036071-af205f3b-f28b-4152-a1ff-e528f4dcf1c8.png)


### Mobile Friendly 

We display the hamburger menu instead of the left nav (main menu)

![image](https://user-images.githubusercontent.com/18692751/224036386-49657a35-77dc-4441-8fc1-e7eb2c040a10.png)

![image](https://user-images.githubusercontent.com/18692751/224036335-e5632ffc-9588-4bbc-89f8-a1746d87eeba.png)


## Oveview of folder structure
There are four main folders:
- assets: this contains all the images, icons, in svg or png
- components: this contains all the common components, in addition to custom components as per figma design.
  Each component has 4 main files:
   - `<COMPONENT_NAME>.tsx`: this is the main component 
   - `<COMPONENT_NAME>.styled.ts`: this contains all the `styled-components` used to build the component from scratch
   - `utils.tsx`: this contains all extra utility methods or components
   - `types.ts`: this contains all custom typescript types
- screens: this contains all the ui screens (in this case, only one screen which is dashboard)
- theme: this contains the theme for the overall app, implemented using `styled-system` library


## What is pending and can be covered in future scope
In interest of time, below items are pending and can be covered in future: 
- Themes: 
   - currently only covers `fontSize`, `fontFamily`, `fontStyle`, `fontWeights`, `lineHeights`, and `letterSpacing`. Since similar font is used in the entire app, thus setting up the theme helps in improving the readability and reducing the redundant work.
   - in future, themes will also include `color`, `borders`, `mediaQueries`, `widths`, etc. 

- Components: this folder will be more structured, and will contain 2 sub-folders: 
   - basic components
   - custom components

- These components are yet to implemented (currently svgs are being used in the project): 
   - Main menu: storage status, logged user info, account info, 
   - Dashboard: satisfaction rate graph, work summary graph, progress bar
   
- Implementation of the hamburger icon in mobile view

- Unit Tests for all components

