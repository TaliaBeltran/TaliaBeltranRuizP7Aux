import { Request, Response } from 'express';
import Post, { IPost } from '../models/post';
//import user from '../models/user';

class PostControllers {
  public async index(req: Request, res: Response) {
    const posts = await Post.find({});
    res.json({ message: "all Posts", posts });    
  }
  public async newPost(req: Request, res: Response) {
    const { title, content} = req.body;
    const nPost = new Post(req.body);
    await nPost.save();
    res.json({ message: "Post created", nPost });      
  }
  public async editPost(req: Request, res: Response) {
    const {id } = req.params;
    const { title, content} = req.body;
    const ePost = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Post update", ePost });       
  }
  public async deletePost(req: Request, res: Response) {
    const { id } = req.params;
    const dPost = await Post.findByIdAndDelete(id);
    res.json({ message: "Post delete", dPost });
  }
}

export const postControllers = new PostControllers();