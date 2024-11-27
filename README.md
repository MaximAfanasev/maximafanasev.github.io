download GIT
OPEN GIT BASH HERE
ssh-keygen -t ed25519 -C 'mail@mail.com'
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
clip < ~/.ssh/id_ed25519.pub
paste in github

git clone project
git config --global user.email ''
git config --global user.name ''

git add .
git commit -m 'commit'
git push


npm i
npm run start