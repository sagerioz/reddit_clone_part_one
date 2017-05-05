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
  vm.blogDB = [{
    title: "A Very Funny Joke",
    author: "anonymous",
    img: "https://s15-us2.ixquick.com/cgi-bin/serveimage?url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fb3%2F22%2Fb7%2Fb322b73e57213ea9ea974b5f4f2fc0d7.jpg&sp=de1cf06982e249d02f76dc21e9fef236",
    body: "This is super funny.",
    date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
    votes: 10,
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
      title: "Another Funny Joke",
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
      author: "From me to you",
      img: "https://s16-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQBexuC_MOiFLwAxNmt45O5REwXoaegdIrYaVbAFOLOeu9w4lXw&sp=5a46518ca78bb8de1c27422a79c85254&anticache=626272",
      body: "Not so funny.",
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
      title: "This made me laugh",
      author: "the Internet",
      img: "https://s15-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQljfaflqEeB_IrmbD4Vgd7rRS_1pIEyaRRmMcT5iXea1zBTn3CSw&sp=66a363996a942b7817b0db54898687e1&anticache=585092",
      body: "Tell me a joke!.",
      date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
      votes: 10,
      comments: [],
      commentsVisible: false,
      newCommentVisible: false
    },
  ]
}

vm.createPost = function () {
  vm.postObj.votes = 0
  vm.blogDB.push(vm.postObj)
    delete vm.postObj
}

vm.toggleForm = function () {
   vm.formVisible = !vm.formVisible
}



vm.countVotes = function (){

}

vm.toggleComment = function(posts) {
posts.commentsVisible = !posts.commentsVisible;
};

}

}());
