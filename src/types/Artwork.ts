import { simpleId } from '../utilites/simpleId'
import { castToArrayOfType } from '../utilites/cast'
import { Contributor } from './Contributor'
import { AWConfiguration } from './AWConfig/AWConfiguration'

export class Artwork {

  id = ''
  title = ''
  published = false
  credits: Contributor[] = []
  year = 0
  description = ''
  configurations = [new AWConfiguration(simpleId())]
  controls = []
  stats = null

  static propFactory = {
    credits: (object: any) => castToArrayOfType(object, Contributor),
    configurations: (object: any) => castToArrayOfType(object, AWConfiguration)
  }
}
