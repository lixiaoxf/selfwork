const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {

    
    await this.ctx.render('page/home/index.nj');
  }
  async aboutUs() {

    
    await this.ctx.render('page/about-us/index.nj');
  }
  async growthVenbtures() {

    
    await this.ctx.render('page/growth-venbtures/index.nj');
  }
  async hedgeFunds() {

    
    await this.ctx.render('page/hedge-funds/index.nj');
  }

  async news() {

    
    await this.ctx.render('page/news/index.nj');
  }

  async addBlog() {

    // let a = await this.ctx.model.Test.find({},res=>{})

    // console.log(a)
    
    const { ctx } = this;
    
    await this.ctx.render('home/edit/index.nj');
  }
  
}

module.exports = HomeController;