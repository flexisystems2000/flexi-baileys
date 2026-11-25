# Vendored VoIP engine

This directory vendors the VoIP implementation from [HirooSy/baileys-lite](https://github.com/HirooSy/baileys-lite), version **0.4.1**.

Upstream source commit: `7814614c80a5511a63f8947beed3c99151659fde`.

The upstream MIT license is reproduced in `THIRD_PARTY_LICENSE`. The source is kept under `lib/Voip` and resolves the parent Baileys package through `lib/index.js`.

This is a source import only. Runtime compatibility with this fork's socket internals and live WhatsApp calling still requires automated checks and a staging call before replacing JARVIS's current adapter.

## JARVIS integration compatibility

The vendored files were compared with the exact upstream **0.4.1** source commit above: all **51 JavaScript files** under `src/voip/` match the corresponding `lib/Voip/` files byte-for-byte (Git blob SHA comparison).

The fork exposes the class as the named package-root export `Voip`. The existing JARVIS adapter's expected interfaces are present:

- `new Voip(sock, { maxConcurrentCalls, voipLogLevel })` and `listen()`
- `call_incoming(call)`, `call_ended(call)`, and `call_inbound_audio(call, pcm)` events
- `acceptCall()`, `rejectCall()`, and `hangup()`
- `coordinator.setExternalAudioMode()`, `feedLiveAudio()`, and `getLiveBufferMs()`
- `coordinator.manager.calls.get(callId)` for the existing audio-buffer tuning path

These are static source/API checks, not proof of a successful live WhatsApp call. A staging call is still required to verify signaling, relay negotiation, and two-way audio on the deployed runtime.
