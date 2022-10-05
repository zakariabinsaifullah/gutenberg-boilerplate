## Gutenberg Custom Block Development Boilerplate

It works like a boilerplate for start developing custom **Gutenberg Block**. This package has been made with
**@wordpress/scripts**. It is almost similar to the **@wordpress/create-block**, but there is a huge differce between them.

[![GPLv2 or Later License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## Gutenberg Boilerplate vs @wordpress/create-block

You may ask me why should you use this package instead of @wordpress/create-block where both packages are developed based
on the almost same dependencies. So, let me explain a bit more so that you can understand why should you use this package.

-   **Major Reason:** @wordpress/create-block package only allows you to develop a single block per plugin. But it is not fair for you if you are working on working on developing multiple blocks and you want to keep all the blocks inside a single plugin. So for **Mulitple Blocks in a single plugin** you have to use our Boilerplate.
-   **Extra:** Gutenberg Boilerplate's files structure is more organized than @wordpress/create-block

## How to Start Your Development
**Simply clone the Repo. in your WordPress plugin directory. Now install the plugin.**

It creates a new plugin with a simply dummy cusotm gutenberg block
and a custom block category. The name of the dummy block is **Bootsrap Block** and you will find it under **BOILERPLATE** cateogry.

Now, it is time to run the following command to install npm, simply run the following command in this boilerplate folder (You may rename the folder as per your need).

```
$ npm install
```

As a result, node_modules will be loaded and you can start developing your own block. To start editing & watching the effect, run the following command.

```
$ npm start
```

For production of your project, you have to build the whole project. So, to build the project, run the following command-

```
$ npm run build
```

## New Block Registration Process

If you want to add a new block to your plugin, you must have to follow these steps:-

-   **Step-1:** Create a new folder inside **blocks** directory. You will find it here: **src/blocks**.
    Suppose, I want to create a **box** block. So, my folder name will be **box** and it will be found in **src/blocks/box**

-   **Step-2:** Keep all necessary blocks infor inside your block folder. In my case, I will keep all blocks files in my **box** folder.
    if you don't know how to write codes for your custom block, you can enjoy this [tutorial series](https://www.youtube.com/playlist?list=PL1anxxLmsQcfLmRKHzejy8DiqWTD6oUFd)

-   **Step-3:** Import your block's **index.js** file in the main **index.js** file. You will find the file here: **src/index.js**. Already dummy block's file has been imported there. see the example. It will look like this: **import './blocks/box/index';**

-   **Step-4:** Open your plugin main php file, in our boilerplate, its name is **plugin.php** (you can rename it as per your need). now find out the block register function. In our boilerplate, its name is **boilerplate_register_block()**.
    Now, simply call the function for your new block and pass the block folder name as the function's agrument. In my case, it is like: **boilerplate_register_block('box')**.
    Remember, you have to call this function individually for each block. If you have 10 blocks, you have to call this function 10 times and pass 10 blocks' name.

**NOTE**: \*It is highly recommended using your own prefix. in case of boilerplate, the prefix was **boilerplate** and **BOILERPLATE\***

## Better Practice

It is better to run **npm run build** firstly for new block registration, then simply run **npm start** to update editing.

## Custom Color Pallete

The following custom color pallate is added as test. You can either use it or remove it. You will find it in **src/utilities**

| Color Name | Hex Code                                                         |
| ---------- | ---------------------------------------------------------------- |
| Block      | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| White      | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Red        | ![#ff0000](https://via.placeholder.com/10/ff0000?text=+) #ff0000 |
| Green      | ![#00ff00](https://via.placeholder.com/10/00ff00?text=+) #00ff00 |
| Blue       | ![#0000ff](https://via.placeholder.com/10/0000ff?text=+) #0000ff |
| Yellow     | ![#ffff00](https://via.placeholder.com/10/ffff00?text=+) #ffff00 |

### Acknowledgements

-   [Gutenberg Developer Handbook](https://developer.wordpress.org/block-editor/)
-   [Block Plugin Checker](https://wordpress.org/plugins/developers/block-plugin-validator/)
-   [WordPress Components](https://wordpress.github.io/gutenberg/)

### Authors

This plugin is designed and developed by Zakaria Binsaifullah - [@zakariabinsaifullah](https://www.github.com/zakariabinsaifullah)

-   Founder of [MakeGutenBlock](https://makegutenblock.com)

### 🚀 About Me

I am a Javascript and WordPress developer having 5+ years of Experience in different fields of Web development. From
the last 3 years, I am focused on **Minimal WordPress Theme** development and developing **Custom Gutenberg Blocks** with **Gutenberg Native Components**.
I am available for any freelance project or hiring. You are most welcomed to [Contact Me](https://makegutenblock.com)

## Feedback

If you have any feedback, please reach out to us at admin@makegutenblock.com or zbinsaifullah@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
