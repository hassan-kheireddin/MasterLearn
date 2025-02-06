
function addDocument(name, description, readMoreLink) {
    const feed = document.getElementById("document-feed");

    const documentDiv = document.createElement("div");
    documentDiv.classList.add("document");

    const docHeader = document.createElement("div");
    docHeader.classList.add("document-header");

    const h3 = document.createElement("h2");
    h3.textContent = name;

    docHeader.appendChild(h3);

    const docDescription = document.createElement("p");
    docDescription.textContent = description;

    const readMoreButton = document.createElement("a");
    readMoreButton.href = readMoreLink;
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("read-more-btn");
    readMoreButton.target = "_blank";

    documentDiv.appendChild(docHeader);
    documentDiv.appendChild(docDescription);
    documentDiv.appendChild(readMoreButton);

    feed.appendChild(documentDiv);
}

addDocument("What Is AI?", "Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals. Such machines may be called AIs. High-profile applications of AI include advanced web search engines (e.g., Google Search); recommendation systems (used by YouTube, Amazon, and Netflix); virtual assistants (e.g., Google Assistant, Siri, and Alexa); autonomous vehicles (e.g., Waymo); generative and creative tools (e.g., ChatGPT and AI art); and superhuman play and analysis in strategy games (e.g., chess and Go). However, many AI applications are not perceived as AI: A lot of cutting edge AI has filtered into general applications, often without being called AI because once something becomes useful enough and common enough it's not labeled AI anymore. Various subfields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include reasoning, knowledge representation, planning, learning, natural language processing, perception, and support for robotics. General intelligence—the ability to complete any task performed by a human on an at least equal level—is among the field's long-term goals. To reach these goals, AI researchers have adapted and integrated a wide range of techniques, including search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, operations research, and economics. AI also draws upon psychology, linguistics, philosophy, neuroscience, and other fields. Assume we have n_h attention heads, and the dimension for each attention head is represented as d_h, so that the concatenated dimension will be (h_n · d_h). Given a model with l layers, if we denote the input for the t-th token in that layer as h_t with dimension d, we need to map the dimension of h_t from d to (h_n · d_h) using the linear mapping matrices.", "https://en.wikipedia.org/wiki/Artificial_intelligence");
addDocument("DeepSeek V3", "This is the first article of our new series Deepseek-V3 Explained, where we will try to demystify DeepSeek-V3 the latest model open-sourced by DeepSeek. In this series, we aim to cover two major topics: Major architecture innovations in DeepSeek-V3, including MLA (Multi-head Latent Attention), DeepSeekMoE, auxiliary-loss-free load balancing, and multi-token prediction training. Training of DeepSeek-V3, including pre-training, finetuning and RL alignment phases. This article mainly focuses on Multi-head Latent Attention, which was first proposed in the development of DeepSeek-V2 and then used in DeepSeek-V3 as well. Note that MLA is developed to speedup inference speed in autoregressive text generation, so the MHA we are talking about under this context is for decoder-only Transformer. The figure below compares three Transformer architectures used for decoding, where (a) shows both the encoder and decoder proposed in the original Attention is All You Need paper. Its decoder part is then simplified by leading to a decoder-only Transformer model shown in (b), which is later used in many generation models like GPT. Nowadays, LLMs are more commonly to choose the structure shown in (c) for more stable training, with normalization applied on the input rather then output, and LayerNorm upgraded to RMS Norm. This will serve as the baseline architecture we will discuss in this article.", "https://towardsdatascience.com/deepseek-v3-explained-1-multi-head-latent-attention-ed6bee2a67c4/");
addDocument("Web Trends", "Web development has undergone significant evolution over the past decade, driven by advancements in technology, changing user expectations, and the proliferation of internet usage. This research paper presents a comprehensive review of the latest trends and practices in web development, drawing upon a thorough analysis of relevant literature and industry reports. The paper begins by discussing the historical development of web development, from the early days of static HTML websites to the advent of dynamic web applications using technologies such as JavaScript, CSS, and server-side programming. The evolution of web development frameworks, libraries, and tools is examined, highlighting key milestones and breakthroughs that have shaped the landscape of modern web ", "https://www.academia.edu/118730565/A_Survey_on_Exploring_the_Evolution_and_Trends_of_Web_Development?utm_source=chatgpt.com");
