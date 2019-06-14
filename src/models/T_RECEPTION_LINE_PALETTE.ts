import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_LINE_PALETTE', {schema: 'dbo' } )
export class T_RECEPTION_LINE_PALETTE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RLP_REPRISE_N',
        })
    public RLP_REPRISE_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'RLP_DATE_DAT',
        })
    public RLP_DATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RLP_PALETTEID_C',
        })
    public RLP_PALETTEID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'RLP_PALETTESTATUS_C',
        })
    public RLP_PALETTESTATUS_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'RLP_LINKCOUNTER_N',
        })
    public RLP_LINKCOUNTER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'RLP_RECEPTION_C',
        })
    public RLP_RECEPTION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RLP_BATCH_DAT',
        })
    public RLP_BATCH_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        name: 'RLP_COMMENT_C',
        })
    public RLP_COMMENT_C: string | null;

}
