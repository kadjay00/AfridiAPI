import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DOCUMENT_TYPE', {schema: 'dbo' } )
export class T_DOCUMENT_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'DOC_DOCTYPE_C',
        })
    public DOC_DOCTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DOC_DESCRIPFRA_C',
        })
    public DOC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DOC_DESCRIPNED_C',
        })
    public DOC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DOC_USERID_C',
        })
    public DOC_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'DOC_FLAGDELETE_C',
        })
    public DOC_FLAGDELETE_C: string | null;

}
