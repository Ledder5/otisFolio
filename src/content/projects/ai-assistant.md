---
title: "DocuMind AI"
summary: "An AI tool that reads your PDF documents and lets you chat with them."
image: "/images/placeholder-3.jpg"
size: "2x1"
tags: ["Python", "OpenAI", "LangChain", "Next.js"]
---
# DocuMind AI

Reading 100-page technical manuals is tedious. I built DocuMind to solve this problem for myself and my team.

## How it works
You upload a PDF, and the backend (built in Python) parses the text, chunks it, and creates vector embeddings stored in Pinecone. When you ask a question through the Next.js frontend, LangChain retrieves the most relevant context and feeds it to OpenAI's GPT model to generate an accurate, cited answer.

This drastically cut down our research time during complex hardware deployments.