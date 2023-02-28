# NG-frontend-application

Check `INSTRUCTIONS.md` file for instructions.

## Run project locally
- Install dependencies with `npm install`
- Run server `npm run dev`
- Cypress testing `cypress open`

## My thought process

1. I am using `rem` for font-size instead of `px`. It is more accessible, user can change base font-size from browser settings. But pixels are easier to read for developers, so I am keeping it inside code. For example, `${15/16}rem` is easier to read than `0.9375rem`. Best from both worlds.
2. Same principle applies for media queries, so using rems there too. If user cranks up their font-size, relative space inside viewport reduces so it should adapt accordingly.
3. My preference is to keep CSS along with the React component in same file, it's quicker to follow. But if the files size grows big I move styles to separate files. If it grows further I would break into smaller components (wasn't needed for this assignment).
4. Not keeping any layout-related logic inside NextJS pages. Styled components are mixing up with the data-fetching logic which is harder to follow.
5. No inline-styles or classes are used. The main goal of styled-components are to keep all styles related to one element at one place to easier maintain CSS code. With the same spirit I am using `font-family` instead of `className` for `next/font`.
6. Not optimizing responsiveness below 250px width.
7. Using Desktop-first media queries. We will declare styles for desktop then if needed it's overriden for smaller viewports.
8. Using `dt` tags instead of `div`s for those key-value pairs inside cards. So the CSS code is more complex but prioritizing semantics over code complexity.
9. Keeping card width of homepage in the theme file, to dynamically adapt media-query if we decide to update that in future. I am concerned about the readability of this code, specially hard to understand for someone not having the context.
10. Animation accessability: Usually I turn on animations based on user's device preference based on the media query `prefers-reduced-motion`. For this assignment I am not using that as we don't have any complicated animations involving element movements.
11. Action-driven animations: We have 3 animations in this project as of now, all are based on mouse hover. Instead of focusing on the `opacity` value changing from `1` to `0.5`, we are focusing on mousehover in and out actions.
	- For mousehover in transition is happening much faster to put attention on the button quickly. Also if user move mouse quickly they will not see the transition properly.
	- For mousehover out it's happening slowly as user are looking at something else at that moment, better to keep it passive.
	- When the mouse is pressed: That case ignored here.
12. React query calls are used from hooks as it's easier to manage unqiue query key and query functions across the codebase.

## Known issues
1. Responsive image missing "sizes" prop.
2. For cypress tests I asserted whether the content is displayed on cards. But can't intercept API requests as they are happening in backend.
