const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {

    
    await this.ctx.render('mobile/page/home/index.nj');
  }
  async aboutUs() {

    
    await this.ctx.render('mobile/page/about-us/index.nj');
  }
  async growthVentures() {

    
    await this.ctx.render('mobile/page/growth-ventures/index.nj');
  }
  async hedgeFunds() {

    
    await this.ctx.render('mobile/page/hedge-funds/index.nj');
  }

  async news() {

    
    await this.ctx.render('mobile/page/news/index.nj');
  }

  async addBlog() {

    // let a = await this.ctx.model.Test.find({},res=>{})

    // console.log(a)
    
    const { ctx } = this;
    
    await this.ctx.render('mobile/home/edit/index.nj');
  }
  
}

module.exports = HomeController;