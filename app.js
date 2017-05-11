(function() {
  'use strict'

  angular.module('app', [])
    .component('blog', {
    controller: controller,
     templateUrl: 'template.html'
   })

function controller() {
const vm = this

vm.$onInit = function() {
  vm.formVisible = false;
  vm.formNotVisible = true;
  vm.blogDB = [{
    title: "A Very Funny Joke",
    author: "anonymous",
    img: "https://s15-us2.ixquick.com/cgi-bin/serveimage?url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fb3%2F22%2Fb7%2Fb322b73e57213ea9ea974b5f4f2fc0d7.jpg&sp=de1cf06982e249d02f76dc21e9fef236",
    body: "This is super funny.",
    date: moment().subtract(6, 'days').subtract(3, 'hours').calendar(),
    votes: 1,
    comments: [
      {
        author: "Matt",
        text: "Cool costume."
      },
      {
        author: "Erica",
        text: "It's weird."
      }
    ],
    commentsVisible: false,
    newCommentVisible: false
    },
    {
      title: "Yet Another silly Joke",
      author: "From me to you",
      img: "https://s16-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQjlN8RKRWBsusUSiKUSCFX5Nk2ZMwWoI1Ad543XLltpxmOILvP&sp=8b2e1a83cbcf6e050345e8b3327037a5&anticache=950096",
      body: "This is super funny, yah?",
      date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
      votes: 10,
      comments: [
        {
          author: "Matt",
          text: "Cool costume."
        }
      ],
      commentsVisible: false,
      newCommentVisible: false
    },
    {
      title: "Another Funny Joke",
      author: "Anonymous",
      img: "https://s16-us2.ixquick.com/cgi-bin/serveimage?url=https%3A%2F%2Fd3g919u5f14ld1.cloudfront.net%2Fassets%2Fimages%2Fusers%2Fdefault-avatar.svg&sp=96f3d16b6b3c21675f471d8ccc527e16",
      body: "Not so funny.",
      date: moment().subtract(9, 'days').subtract(3, 'hours').calendar(),
      votes: 10,
      comments: [
        {
          author: "Matt",
          text: "WTF."
        }
      ],
      commentsVisible: false,
      newCommentVisible: false
    },
    {
      title: "This made me laugh",
      author: "the Internet",
      img: "https://s15-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQljfaflqEeB_IrmbD4Vgd7rRS_1pIEyaRRmMcT5iXea1zBTn3CSw&sp=66a363996a942b7817b0db54898687e1&anticache=585092",
      body: "No joke!",
      date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
      votes: 111,
      comments: [],
      commentsVisible: false,
      newCommentVisible: false
    },
  ]
}

vm.createPost = function () {
  console.log("TITLE", vm.postObj.title);
  if(vm.postObj.img = "undefined"){
    vm.postObj.img = "https://s16-us2.ixquick.com/cgi-bin/serveimage?url=https%3A%2F%2Fd3g919u5f14ld1.cloudfront.net%2Fassets%2Fimages%2Fusers%2Fdefault-avatar.svg&sp=96f3d16b6b3c21675f471d8ccc527e16"
  }
  vm.postObj.votes = 0
  vm.postObj.comments = []
  vm.postObj.date = moment().calendar()
  vm.blogDB.push(vm.postObj)
    delete vm.postObj
}

vm.createComment = function (posts) {
   if(posts.newComment){
   let temp = posts.newComment
   posts.comments.push({
     text: temp
   })
   delete posts.newComment
  posts.newCommentVisible = true;

  }
  else{
    return;
  }
 }


vm.toggleForm = function () {
   vm.formVisible = !vm.formVisible
   vm.formNotVisible = !vm.formNotVisible
}



vm.countVotesUp = function (posts){
  let temp = posts.votes
   posts.votes += 1
   console.log("UP",temp);

}
vm.countVotesDown = function (posts){
  let temp = posts.votes
  if(temp > 0){
    posts.votes -= 1;
   console.log("DOWN",temp);
 }

}

vm.toggleComment = function(posts) {
posts.commentsVisible = !posts.commentsVisible;
};

}

}());
