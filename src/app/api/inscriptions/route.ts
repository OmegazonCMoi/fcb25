import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "inscriptions.json");

export async function GET() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return new Response(data, { status: 200 });
    } catch (error) {
        console.error("Erreur lecture fichier :", error);
        return new Response("[]", { status: 200 }); // Retourne un tableau vide si le fichier n'existe pas
    }
}

export async function POST(req: Request) {
    try {
        const newEntry = await req.json();
        console.log("Nouvelle inscription reçue :", newEntry);

        let inscriptions = [];

        try {
            const data = await fs.readFile(filePath, "utf8");
            inscriptions = JSON.parse(data || "[]");
        } catch (readError) {
            console.error("Erreur lecture fichier :", readError);
            console.warn("⚠️ Fichier introuvable, création d'un nouveau.");
        }

        inscriptions.push(newEntry);

        await fs.writeFile(filePath, JSON.stringify(inscriptions, null, 2), "utf8");
        console.log("✅ Inscription enregistrée !");
        return new Response(JSON.stringify(newEntry), { status: 201 });

    } catch (error) {
        console.error("❌ Erreur lors de l'enregistrement :", error);
        return new Response("Erreur lors de l'enregistrement", { status: 500 });
    }
}
