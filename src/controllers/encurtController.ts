import {Request, Response} from "express"
import {Urls} from "../models/urls"

export const urlEncurt = async (req: Request, res: Response) => {
   const urlDefault  = req.body.urldefault;

   const [newUrl, find] = await Urls.findOrBuild({ // ache ou crie // newUrl - criou novo // find - achou no db
      where:{
         urldefault:urlDefault
      },
      defaults: {
         urldefault:urlDefault
      },
   })

   if (newUrl) {  // se nao existir crie
   const mat = Math.random() *10
   const encrypt = "encurt" + Math.floor(mat * 7) + Math.floor(mat* 5)
   newUrl.urlshort = encrypt

   await newUrl.save() // criado e inserido link encurtado aleatorio

   
   //trocar link encurtado aleatorio por link baseado no id no db
  const result = await Urls.findOne({where:{urldefault: urlDefault}})

   if (result) { 
   result.urlshort = "encurt" + result.id
   await result.save()
   res.json ({idEncurt: result.id, defaultUrl:result.urldefault, newUrlCom: result.urlshort})

  } else {res.json({error: "Houve um erro"})}
  
   // --------------------------------//  

   if (find) { // se existir mostre
      res.status(200)
   }

}}

export const urlEncurtToDefault = async (req: Request, res: Response) => {
   const urlShort: string = req.params.urlshort

   const result = await Urls.findOne({
      attributes: ["urlshort","urldefault"],
      where: {urlshort: urlShort}
   })
   if (result) {
      console.log(result.urldefault)
      res.redirect(result.urldefault as string)
   }
   else {res.json({})}
} 

export const urlFindAll = async (req: Request, res: Response) => {
   const result = await Urls.findAll({
      attributes: ["urldefault", "urlshort"]
   })

   res.json ({result})
}

export const home = async (req: Request, res: Response) => {
   res.send("Acesse uma das Rotas / Endpoints para ultilizar a api")
}