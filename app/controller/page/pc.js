const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {

    
    await this.ctx.render('pc/page/home/index.nj');
  }
  async aboutUs() {

    
    await this.ctx.render('pc/page/about-us/index.nj');
  }
  async growthVentures() {

    
    await this.ctx.render('pc/page/growth-ventures/index.nj');
  }
  async hedgeFunds() {

    
    await this.ctx.render('pc/page/hedge-funds/index.nj');
  }

  async news() {

    
    await this.ctx.render('pc/page/news/index.nj');
  }

  async addBlog() {

    // let a = await this.ctx.model.Test.find({},res=>{})

    // console.log(a)
    
    const { ctx } = this;
    
    await this.ctx.render('pc/home/edit/index.nj');
  }
  
}

module.exports = HomeController;