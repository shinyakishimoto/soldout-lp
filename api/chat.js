export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'messages is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const systemInstruction = `あなたはSOLDOUT（ソウルドアウト）株式会社のAIアシスタントです。
中小・ベンチャー企業向けのデジタルマーケティング支援会社として、以下のサービスを提供しています。

【サービス】
- Web広告運用（Google, Yahoo!, Meta広告など）
- SEO・コンテンツ制作
- DX支援・ツール導入
- ECサポート

【会社情報】
- 累計支援社数：3,000社以上
- 全国拠点数：20拠点以上
- 所在地：東京都文京区後楽1-4-14 後楽森ビル19F
- 電話：03-xxxx-xxxx
- メール：contact@soldout.co.jp

ユーザーからの質問に対して、親切・丁寧・簡潔に日本語で回答してください。
サービスの詳細や料金については「お問い合わせください」と案内してください。
会社と関係のない質問には「デジタルマーケティングに関するご質問をお気軽にどうぞ」と返してください。`;

  try {
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));
    const userMessage = messages[messages.length - 1].text;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [
            ...history.map((m) => ({ role: m.role, parts: m.parts })),
            { role: 'user', parts: [{ text: userMessage }] },
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      return res.status(500).json({ error: err.error?.message || 'Gemini API error' });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '申し訳ありません、回答を生成できませんでした。';

    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
