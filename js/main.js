
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1477550173419999323/yVNcPoThbLKtraZrGhBw9w84BhbnBjwJAnFngU7_mKu45iirscEjnpXSrMBEBm_VgKHA";

// ファイル選択
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");

uploadBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    if (!file) return;

    // 仮の診断結果（あとでAI結果に差し替え）
    const animalResult = "ハリネズミ 🦔";
    const comment = "慎重でマイペースなタイプ";

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
        "payload_json",
        JSON.stringify({
            username: "似てる動物AI",
            content: "📷 新しい診断結果が届きました！",
            embeds: [
                {
                    title: "診断結果",
                    description: `🦁 **動物タイプ**：${animalResult}\n💬 **特徴**：${comment}`,
                    color: 0x9ddcff,
                    image: {
                        url: "attachment://image.png"
                    }
                }
            ]
        })
    );

    await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        body: formData
    });

    alert("診断完了！Discordに送信しました");
});
