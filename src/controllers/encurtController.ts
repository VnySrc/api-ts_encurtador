import {Request, Response} from "express"
import {Urls} from "../models/urls"

export const urlEncurt = (req: Request, res: Response) => {
   const urlDefault: string = req.params.urldefault;

   const newUrl = Urls.build({
        urldefault: urlDefault
   })

   const mat = Math.random() *10
   const encrypt = "encurt" + Math.floor(mat * 7) + Math.floor(mat* 5)
   newUrl.urlshort = encrypt

   newUrl.save()
   res.json({newUrl})
}