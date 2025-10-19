"use strict";

import { ChangeTheme } from "./ChangeTheme.js";
import { LoadDogs } from "./LoadDogs.js";
import { ScrollNavigator } from './ScrollNavigator.js';

/**
 * Використовуючи один з АРІ https://github.com/public-apis/public-apis#animals
  та функцію fetch організувати завантаження та відображення даних.
  
  Намагайтесь зробити це з використанням класів. Окремо клас
  для побудови розмітки. Окремо клас, який буде робити запити
  і повертати результати.
 */

window.addEventListener("load", windowLoad);

function windowLoad() {

  const scrollNav = new ScrollNavigator()
  scrollNav.run()

  const themeManager = new ChangeTheme()
  themeManager.run()

  const dogs = new LoadDogs('.dog__items', '.loading', 20)
  dogs.run()
}