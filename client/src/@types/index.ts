export interface TasksContract {
  contractName: string;
  abi: ABI[];
  metadata: string;
  bytecode: string;
  deployedBytecode: string;
  immutableReferences: ImmutableReferences;
  generatedSources: GeneratedSource[];
  deployedGeneratedSources: DeployedGeneratedSource[];
  sourceMap: string;
  deployedSourceMap: string;
  source: string;
  sourcePath: string;
  ast: LegacyASTClass;
  legacyAST: LegacyASTClass;
  compiler: Compiler;
  networks: Networks;
  schemaVersion: string;
  updatedAt: Date;
  devdoc: Doc;
  userdoc: Doc;
}

export interface ABI {
  inputs: Put[];
  stateMutability?: string;
  type: string;
  anonymous?: boolean;
  name?: string;
  outputs?: Put[];
}

export interface Put {
  indexed?: boolean;
  internalType: InternalType;
  name: string;
  type: InternalType;
}

export enum InternalType {
  Bool = "bool",
  String = "string",
  Task = "Task",
  Uint = "uint",
  Uint256 = "uint256",
}

export interface LegacyASTClass {
  absolutePath: string;
  exportedSymbols: ExportedSymbols;
  id: number;
  license: string;
  nodeType: string;
  nodes: ASTNode[];
  src: string;
}

export interface ExportedSymbols {
  TasksContract: number[];
}

export interface ASTNode {
  id: number;
  literals?: string[];
  nodeType: string;
  src: string;
  abstract?: boolean;
  baseContracts?: any[];
  contractDependencies?: any[];
  contractKind?: string;
  fullyImplemented?: boolean;
  linearizedBaseContracts?: number[];
  name?: string;
  nameLocation?: string;
  nodes?: NodeNode[];
  scope?: number;
  usedErrors?: any[];
}

export interface NodeNode {
  constant?: boolean;
  functionSelector?: string;
  id: number;
  mutability?: Mutability;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope?: number;
  src: string;
  stateVariable?: boolean;
  storageLocation?: StorageLocation;
  typeDescriptions?: TypeDescriptions;
  typeName?: NodeTypeName;
  value?: NodeValue;
  visibility?: NodeVisibility;
  body?: BodyClass;
  implemented?: boolean;
  kind?: string;
  modifiers?: any[];
  parameters?: BodyClass;
  returnParameters?: BodyClass;
  stateMutability?: string;
  virtual?: boolean;
  anonymous?: boolean;
  canonicalName?: string;
  members?: MemberElement[];
}

export interface BodyClass {
  id?: number;
  nodeType: ASTNodeType;
  src: string;
  statements?: ParametersStatement[];
  parameters?: MemberElement[];
}

export enum ASTNodeType {
  Block = "Block",
  ParameterList = "ParameterList",
  YulBlock = "YulBlock",
}

export interface MemberElement {
  constant: boolean;
  id: number;
  mutability: Mutability;
  name: string;
  nameLocation: string;
  nodeType: MemberNodeType;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: StorageLocation;
  typeDescriptions: TypeDescriptions;
  typeName: TypeName;
  visibility: ParameterVisibility;
  indexed?: boolean;
}

export enum Mutability {
  Mutable = "mutable",
}

export enum MemberNodeType {
  VariableDeclaration = "VariableDeclaration",
}

export enum StorageLocation {
  Default = "default",
  Memory = "memory",
}

export interface TypeDescriptions {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName {
  id: number;
  name: InternalType;
  nodeType: TypeNameNodeType;
  referencedDeclaration?: number;
  src: string;
  typeDescriptions?: TypeDescriptions;
}

export enum TypeNameNodeType {
  ElementaryTypeName = "ElementaryTypeName",
  IdentifierPath = "IdentifierPath",
}

export enum ParameterVisibility {
  Internal = "internal",
}

export interface ParametersStatement {
  expression?: TentacledExpression;
  id?: number;
  nodeType: string;
  src: string;
  eventCall?: EventCall;
  assignments?: number[];
  declarations?: Declaration[];
  initialValue?: InitialValue;
  body?: PurpleBody;
  name?: string;
  parameters?: ReturnVariableElement[];
  returnVariables?: ReturnVariableElement[];
  value?: ConditionValue;
  variables?: ReturnVariableElement[];
  variableNames?: ReturnVariableElement[];
  condition?: Ion;
  post?: Post;
  pre?: Post;
}

export interface PurpleBody {
  nodeType: ASTNodeType;
  src: string;
  statements: PurpleStatement[];
}

export interface PurpleStatement {
  expression?: FluffyExpression;
  nodeType: PurpleNodeType;
  src: string;
  value?: ConditionValue;
  variables?: ReturnVariableElement[];
  variableNames?: ReturnVariableElement[];
  body?: Post;
  condition?: Ion;
  post?: Post;
  pre?: Post;
}

export interface Post {
  nodeType: ASTNodeType;
  src: string;
  statements: PostStatement[];
}

export interface PostStatement {
  expression?: PurpleExpression;
  nodeType: PurpleNodeType;
  src: string;
  value?: ConditionElement;
  variableNames?: ReturnVariableElement[];
}

export interface PurpleExpression {
  arguments: PurpleArgument[];
  functionName: ReturnVariableElement;
  nodeType: ValueNodeType;
  src: string;
}

export interface PurpleArgument {
  arguments?: FluffyArgument[];
  functionName?: ReturnVariableElement;
  nodeType: ValueNodeType;
  src: string;
  kind?: Kind;
  type?: string;
  value?: string;
}

export interface FluffyArgument {
  name?: string;
  nodeType: ValueNodeType;
  src: string;
  arguments?: ReturnVariableElement[];
  functionName?: ReturnVariableElement;
}

export interface ReturnVariableElement {
  name: string;
  nodeType: ReturnVariableNodeType;
  src: string;
  type?: string;
}

export enum ReturnVariableNodeType {
  YulIdentifier = "YulIdentifier",
  YulTypedName = "YulTypedName",
}

export enum ValueNodeType {
  Literal = "Literal",
  YulFunctionCall = "YulFunctionCall",
  YulIdentifier = "YulIdentifier",
  YulLiteral = "YulLiteral",
}

export enum Kind {
  Number = "number",
  String = "string",
}

export enum PurpleNodeType {
  YulAssignment = "YulAssignment",
  YulBlock = "YulBlock",
  YulExpressionStatement = "YulExpressionStatement",
  YulForLoop = "YulForLoop",
  YulIf = "YulIf",
  YulVariableDeclaration = "YulVariableDeclaration",
}

export interface ConditionElement {
  arguments?: ConditionValue[];
  functionName?: ReturnVariableElement;
  nodeType: ValueNodeType;
  src: string;
  name?: string;
}

export interface ConditionValue {
  name?: string;
  nodeType: ValueNodeType;
  src: string;
  kind?: Kind;
  type?: string;
  value?: string;
  arguments?: ConditionValue[];
  functionName?: ReturnVariableElement;
}

export interface Ion {
  arguments: ConditionValue[];
  functionName: ReturnVariableElement;
  nodeType: ValueNodeType;
  src: string;
}

export interface FluffyExpression {
  arguments: TentacledArgument[];
  functionName: ReturnVariableElement;
  nodeType: ValueNodeType;
  src: string;
}

export interface TentacledArgument {
  name?: string;
  nodeType: ValueNodeType;
  src: string;
  arguments?: StickyArgument[];
  functionName?: ReturnVariableElement;
  kind?: Kind;
  type?: string;
  value?: string;
}

export interface StickyArgument {
  name?: string;
  nodeType: ValueNodeType;
  src: string;
  kind?: Kind;
  type?: string;
  value?: string;
  arguments?: ReturnVariableElement[];
  functionName?: ReturnVariableElement;
}

export interface Declaration {
  constant: boolean;
  id: number;
  mutability: Mutability;
  name: string;
  nameLocation: string;
  nodeType: MemberNodeType;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: StorageLocation;
  typeDescriptions: TypeDescriptions;
  typeName: ValueType;
  visibility: ParameterVisibility;
}

export interface ValueType {
  id: number;
  nodeType: string;
  pathNode: TypeName;
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions;
}

export interface EventCall {
  arguments: EventCallArgument[];
  expression: SubExpressionClass;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  kind: string;
  lValueRequested: boolean;
  names: any[];
  nodeType: EventCallNodeType;
  src: string;
  tryCall: boolean;
  typeDescriptions: TypeDescriptions;
}

export interface EventCallArgument {
  id: number;
  name?: string;
  nodeType: BaseExpressionNodeType;
  overloadedDeclarations?: any[];
  referencedDeclaration?: number;
  src: string;
  typeDescriptions: TypeDescriptions;
  hexValue?: string;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  kind?: InternalType;
  lValueRequested?: boolean;
  value?: string;
  expression?: SubExpressionClass;
  memberName?: string;
}

export interface SubExpressionClass {
  id: number;
  name: string;
  nodeType: BaseExpressionNodeType;
  overloadedDeclarations: any[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions;
  argumentTypes?: TypeDescriptions[];
}

export enum BaseExpressionNodeType {
  Identifier = "Identifier",
  Literal = "Literal",
  MemberAccess = "MemberAccess",
}

export enum EventCallNodeType {
  Assignment = "Assignment",
  FunctionCall = "FunctionCall",
  UnaryOperation = "UnaryOperation",
  YulFunctionCall = "YulFunctionCall",
}

export interface TentacledExpression {
  arguments?: IndigoArgument[];
  expression?: SubExpressionClass;
  id?: number;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  kind?: string;
  lValueRequested?: boolean;
  names?: any[];
  nodeType: EventCallNodeType;
  src: string;
  tryCall?: boolean;
  typeDescriptions?: TypeDescriptions;
  operator?: string;
  prefix?: boolean;
  subExpression?: SubExpressionClass;
  leftHandSide?: InitialValue;
  rightHandSide?: RightHandSide;
  functionName?: ReturnVariableElement;
}

export interface IndigoArgument {
  hexValue?: string;
  id?: number;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  kind?: Kind;
  lValueRequested?: boolean;
  nodeType: ValueNodeType;
  src: string;
  typeDescriptions?: TypeDescriptions;
  value?: string;
  name?: string;
  arguments?: ConditionValue[];
  functionName?: ReturnVariableElement;
  type?: string;
}

export interface InitialValue {
  baseExpression?: SubExpressionClass;
  id: number;
  indexExpression?: SubExpressionClass;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: InitialValueNodeType;
  src: string;
  typeDescriptions: TypeDescriptions;
  expression?: SubExpressionClass;
  memberName?: string;
  referencedDeclaration?: number;
}

export enum InitialValueNodeType {
  IndexAccess = "IndexAccess",
  MemberAccess = "MemberAccess",
}

export interface RightHandSide {
  arguments?: EventCallArgument[];
  expression?: SubExpressionClass;
  id: number;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  kind?: string;
  lValueRequested?: boolean;
  names?: any[];
  nodeType: string;
  src: string;
  tryCall?: boolean;
  typeDescriptions: TypeDescriptions;
  operator?: string;
  prefix?: boolean;
  subExpression?: InitialValue;
  name?: string;
  overloadedDeclarations?: any[];
  referencedDeclaration?: number;
}

export interface NodeTypeName {
  id: number;
  name?: InternalType;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions;
  keyType?: TypeName;
  valueType?: ValueType;
}

export interface NodeValue {
  hexValue: string;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  kind: Kind;
  lValueRequested: boolean;
  nodeType: ValueNodeType;
  src: string;
  typeDescriptions: TypeDescriptions;
  value: string;
}

export enum NodeVisibility {
  Public = "public",
}

export interface Compiler {
  name: string;
  version: string;
}

export interface DeployedGeneratedSource {
  ast: DeployedGeneratedSourceAST;
  contents: string;
  id: number;
  language: string;
  name: string;
}

export interface DeployedGeneratedSourceAST {
  nodeType: ASTNodeType;
  src: string;
  statements: FluffyStatement[];
}

export interface FluffyStatement {
  body: FluffyBody;
  name: string;
  nodeType: FluffyNodeType;
  parameters?: ReturnVariableElement[];
  returnVariables?: ReturnVariableElement[];
  src: string;
}

export interface FluffyBody {
  nodeType: ASTNodeType;
  src: string;
  statements: TentacledStatement[];
}

export interface TentacledStatement {
  nodeType: PurpleNodeType;
  src: string;
  value?: ConditionValue;
  variableNames?: ReturnVariableElement[];
  expression?: Ion;
  variables?: ReturnVariableElement[];
  body?: Post;
  condition?: Ion;
  statements?: StatementStatement[];
  post?: Post;
  pre?: BodyClass;
}

export interface StatementStatement {
  nodeType: PurpleNodeType;
  src: string;
  value?: PurpleValue;
  variables?: ReturnVariableElement[];
  body?: BodyClass;
  condition?: ConditionElement;
  variableNames?: ReturnVariableElement[];
}

export interface PurpleValue {
  arguments?: ConditionElement[];
  functionName?: ReturnVariableElement;
  nodeType: ValueNodeType;
  src: string;
  kind?: Kind;
  type?: string;
  value?: string;
}

export enum FluffyNodeType {
  YulFunctionDefinition = "YulFunctionDefinition",
}

export interface Doc {
  kind: string;
  methods: ImmutableReferences;
  version: number;
}

export interface ImmutableReferences {}

export interface GeneratedSource {
  ast: BodyClass;
  contents: string;
  id: number;
  language: string;
  name: string;
}

export interface Networks {
  "5777": The5777;
}

export interface The5777 {
  events: ImmutableReferences;
  links: ImmutableReferences;
  address: string;
  transactionHash: string;
}

export interface ITaskFormat {
  id: number;
  title: string;
  description: string;
  createdAt: number;
  done: boolean;
}
