import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'

//User
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'

//Authen
import Login from '@/components/Login'

//Blogs
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

//Comments
import CommentIndex from '@/components/Comments/Index'

//Upload
import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen 
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // blogs
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blogs-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blogs-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    // comments  
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    // upload testing     
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
  ]
})
