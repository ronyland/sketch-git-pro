// Export artboards for pretty diffs
import { sendEvent } from '../analytics'
import { checkForFile, checkForGitRepository, executeSafely, exportArtboards } from '../common'
import { getUserPreferences } from '../preferences'

export default function (context) {
  if (!checkForFile(context) && !checkForGitRepository(context)) { return }
  executeSafely(context, function () {
    sendEvent(context, 'Manual Export', 'Do export')
    exportArtboards(context, getUserPreferences(context))
    context.document.showMessage('Artboards exported')
  })
}
