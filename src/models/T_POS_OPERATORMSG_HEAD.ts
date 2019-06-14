import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_OPERATORMSG_HEAD', {schema: 'dbo' } )
export class T_POS_OPERATORMSG_HEAD {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'POH_ID_N',
        })
    public POH_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'POH_DESCRIPTION_C',
        })
    public POH_DESCRIPTION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'POH_VALIDFROM_DAT',
        })
    public POH_VALIDFROM_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'POH_VALIDTILL_DAT',
        })
    public POH_VALIDTILL_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'POH_CREATION_DAT',
        })
    public POH_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'POH_CREATIONUSER_C',
        })
    public POH_CREATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'POH_MODIFIED_DAT',
        })
    public POH_MODIFIED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'POH_MODIFIEDUSER_C',
        })
    public POH_MODIFIEDUSER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POH_DELETED_C',
        })
    public POH_DELETED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'POH_DELETED_DAT',
        })
    public POH_DELETED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'POH_DELETEDUSER_C',
        })
    public POH_DELETEDUSER_C: string | null;

}
