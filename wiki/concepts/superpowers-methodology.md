---
title: Superpowers — Software Development Methodology (14 Skills)
type: concept
tags: [methodology, skills, ai-agents, tdd, subagent, claude-code, engineering]
created: 2026-06-19
updated: 2026-06-19
sources: [superpowers-readme.md]
---

## Tổng quan

Phương pháp phát triển phần mềm hoàn chỉnh cho AI coding agents của [[entities/primeradiant]]. Không chỉ là tập skills — là **quy trình khép kín** từ ý tưởng đến merge. Skills tự động trigger, không cần gọi tay.

**Vị trí file:** `D:\superpowers-main\skills\`

---

## Luồng hoạt động cốt lõi

```
Bắt đầu conversation
       ↓
using-superpowers (auto, mọi conversation)
       ↓
brainstorming → khai thác user intent, requirements
       ↓
writing-plans → tạo implementation plan đủ chi tiết
       ↓
using-git-worktrees → isolated workspace
       ↓
subagent-driven-development → agent con làm từng task + review
  hoặc dispatching-parallel-agents → tasks độc lập chạy song song
       ↓
verification-before-completion → chạy lệnh verify, không claim thành công mù
       ↓
requesting-code-review → trước khi merge
receiving-code-review → xử lý feedback nghiêm túc
       ↓
finishing-a-development-branch → merge / PR / cleanup
```

---

## 14 Skills

### Điều phối (tự động)

| Skill | Khi nào |
|-------|---------|
| `using-superpowers` | **Mọi conversation** — thiết lập cách tìm và dùng skills, kích hoạt trước bất kỳ response nào kể cả câu hỏi làm rõ |

### Lên kế hoạch & thiết kế

| Skill | Khi nào |
|-------|---------|
| `brainstorming` | **BẮT BUỘC** trước mọi creative work — khai thác intent, requirements, thiết kế trước khi code |
| `writing-plans` | Sau khi có spec/requirements, trước khi chạm vào code — tạo implementation plan đủ rõ |
| `writing-skills` | Tạo skill mới, chỉnh sửa skill cũ, verify skill hoạt động trước khi deploy |

### Thực thi

| Skill | Khi nào |
|-------|---------|
| `subagent-driven-development` | Thực thi implementation plan với các task độc lập trong session hiện tại |
| `executing-plans` | Có written implementation plan cần chạy trong session riêng với review checkpoints |
| `dispatching-parallel-agents` | Có 2+ task độc lập không có shared state hay sequential dependency |
| `using-git-worktrees` | Bắt đầu feature work cần isolation, hoặc trước khi thực thi plan |

### Chất lượng code

| Skill | Khi nào |
|-------|---------|
| `test-driven-development` | Implement bất kỳ feature hay bugfix nào — viết test trước, xem fail, viết code tối thiểu, refactor |
| `systematic-debugging` | Gặp bug, test fail, hoặc behavior bất ngờ — trước khi đề xuất fix |
| `verification-before-completion` | Sắp claim "xong" hoặc "đã fix" — bắt buộc chạy verify commands, evidence trước assertions |

### Review & hoàn thiện

| Skill | Khi nào |
|-------|---------|
| `requesting-code-review` | Hoàn thành task, implement major feature, hoặc trước khi merge |
| `receiving-code-review` | Nhận feedback code review — yêu cầu rigor kỹ thuật, không đồng ý mù quáng |
| `finishing-a-development-branch` | Implementation xong, tests pass — quyết định merge / PR / cleanup |

---

## Điểm khác biệt so với các bộ skills khác

| Đặc điểm | Superpowers | Matt Pocock Skills |
|---|---|---|
| Triết lý | **Methodology hoàn chỉnh**, auto-trigger | Skills nhỏ, composable, user-controlled |
| Trigger | Tự động từ đầu conversation | User-invoked hoặc model-invoked tách biệt |
| Subagent | Có `subagent-driven-development` built-in | Không có |
| Parallel | `dispatching-parallel-agents` | Không có |
| Verification | `verification-before-completion` bắt buộc | Không có tương đương |

---

## Cài đặt Claude Code

```bash
# Từ official marketplace
/plugin install superpowers@claude-plugins-official

# Từ Superpowers marketplace
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

---

## Nguyên tắc cốt lõi

- **TDD thực sự**: red → green → refactor, không bỏ qua bước nào
- **YAGNI**: You Aren't Gonna Need It — không build trước
- **DRY**: Don't Repeat Yourself
- **Evidence before assertions**: chạy lệnh verify trước khi claim "đã xong"
- **Subagent-driven**: agent chính điều phối, agent con thực thi — có thể chạy tự động hàng tiếng đồng hồ

## Nguồn

[[sources/2026-superpowers]] | [[entities/primeradiant]]
