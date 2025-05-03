/*
==================================
 Filename: index.js
 Created: 2025-05-03 22:24:01
 Author: Guilherme Feitosa
 Description: Website main script
==================================
*/

fetch("sections/nav.html")                                  .then(response => response.text())                      .then(data => document.getElementById("nav").innerHTML = data);
