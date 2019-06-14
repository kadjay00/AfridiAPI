import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIONITEMS', {schema: 'dbo' } )
export class T_ACTIONITEMS {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'ACI_LINE_N',
        })
    public ACI_LINE_N: number;

    @Column('numeric', {
        nullable: false,
        scale: 0,
        name: 'ACI_ACTIONID_N',
        })
    public ACI_ACTIONID_N: number;

    @Column('char', {
        nullable: true,
        name: 'ACI_TYPE_C',
        })
    public ACI_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ACI_IDNUMBER_C',
        })
    public ACI_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ACI_GIBREF_C',
        })
    public ACI_GIBREF_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'ACI_EANCODE_N',
        })
    public ACI_EANCODE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ACI_ALLVARFLAG_C',
        })
    public ACI_ALLVARFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACI_OVERRIDEFLAG_C',
        })
    public ACI_OVERRIDEFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACI_BLOCK_C',
        })
    public ACI_BLOCK_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ACI_MODIFIED_DAT',
        })
    public ACI_MODIFIED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ACI_USER_C',
        })
    public ACI_USER_C: string | null;

}
