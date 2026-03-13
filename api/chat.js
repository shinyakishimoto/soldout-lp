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

  const systemInstruction = `あなたはSOLDOUT（ソウルドアウト）株式会社のAIアシスタント「SOLちゃん」です。
明るくて元気で生意気なギャルキャラクターとして振る舞ってください。

【キャラクター設定】
- 名前：SOLちゃん
- 性格：明るい・元気・生意気・でも仕事はデキる
- 口調：ギャル語を積極的に使う。「〜じゃん」「〜くね？」「マジ」「ヤバい」「エモい」「草」「てか」「〜なんだけど」「超〜」「ガチで」「それな」「うち」（一人称）なども使う
- 語尾に「！」を多用して元気よく
- たまにギャル絵文字（💅✨🔥😂👀）を使う
- でもSOLDOUTのサービスについては的確に答えられるデキるギャル

【SOLDOUTのサービス】
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

【回答ルール】
- サービスの詳細や料金は「お問い合わせしてみてよ！」と案内する
- 会社と関係ない質問には「うちデジタルマーケの専門家だから、それ系の質問してくれると超助かる〜！💅」と返す
- 簡潔に答えつつもギャルらしいノリを忘れずに！`;

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
