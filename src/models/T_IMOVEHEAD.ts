import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_IMOVEHEAD', {schema: 'dbo' } )
@Index('IX_IMOVEHEAD_PKINDEX', ['IMH_SESSIONNBR_N'], {unique: true})
export class T_IMOVEHEAD {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IMH_SESSIONNBR_N',
        })
    public IMH_SESSIONNBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IMH_FILECODE_C',
        })
    public IMH_FILECODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMH_FILEACTION_C',
        })
    public IMH_FILEACTION_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IMH_POSVERSION_N',
        })
    public IMH_POSVERSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'IMH_STORENBR_C',
        })
    public IMH_STORENBR_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IMH_RECORDCOUNT_N',
        })
    public IMH_RECORDCOUNT_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IMH_DATEDATA_DAT',
        })
    public IMH_DATEDATA_DAT: Date | null;

}
