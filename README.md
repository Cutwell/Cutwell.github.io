# Cutwell.GitHub.IO

### Contributions
Found a language not included in lang.css? Make a pull-request!

### Setting Ajax requests manually
If you intend to host this website on a none-github domain, you will need to set the Ajax requests manually.
1. Enter git.js
2. delete the top line:
```javascript
var url = window.location.href.split(".")[0];
```
3. replace it with this:
```javascript
var url = "__YOUR_USER_NAME__";
```
Where __YOUR_USER_NAME__ is your GitHub user name.

4. Repeat for user.js


### TODO:
4. truncate the blog link if it doesn't fit inside the user stats area, same with user bio + name
