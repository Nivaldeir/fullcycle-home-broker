import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedArraySubdocument } from "mongoose";

export type WalletAssetDocument = HydratedArraySubdocument<WalletAsset>

@Schema({
    collection: "WalletAsset"
})
export class WalletAsset { }
export const WalletAssetSchema = SchemaFactory.createForClass(WalletAsset)