import { UserServiceBoundary } from '../../../../../../User/usecases/repository/UserServiceBoundary';
import { Reply } from '../../model/Reply';
import { DraftRepository } from '../../repository/DraftRepository';
import NotificationBoundary from '../../repository/NotificationBoundary';

export class SaveForumDraftUseCase {
  constructor(
    private readonly draftRepo: DraftRepository,
    private readonly notifyService: NotificationBoundary
    private readonly userService: UserServiceBoundary
  ) {}

  async execute(replyInput: Reply): Promise<Reply> {
    const forumcondition = this.userService.isHaveForumPermission()
         .catch((err) => this.notifyService.notifyError(Reply.fromError(err)))

    return this.draftRepo
      .saveDraft(replyInput)
      .catch((err) => this.notifyService.notifyError(Reply.fromError(err)));
  }
}
