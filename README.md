# github-spotter
Search for GitHub Profiles


## Requirements 
- Node<br>
    Issue [this](https://nodejs.org/en/download/) link to install node.js on your system.

## Running the project
1. Clone the project <br>
```git clone https://github.com/viveshCodes/github-spotter.git``` 

2. Move to  root of project <br>
```cd github-spotter ```

3. Creating GitHub OAuth App 
- Follow this [link](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) to create GitHub OAuth App
- Copy CLIENT ID and CLIENT SECRET from GitHub Oauth App
- Create a file ```.env.local``` in the root of project
- Edit ```.env.local``` file as <br>
```
REACT_APP_GITHUB_CLIENT_ID='your_client_id'
REACT_APP_GITHUB_CLIENT_SECRET='your_client_secret'
```
4. Running server<br>
```npm start```

        
